/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { isEqual } from 'lodash';
import withWrappedGetInitial from './with-wrapped-getinitial';

// Define a HOC which can be used to inject a custom state into a component
export default (options = {}) => Component =>
  withWrappedGetInitial(Component)(
    class withComponentStateful extends React.Component {
      constructor(props) {
        super(props);

        this.bindings = {};
        this.state = withComponentStateful.getInitialState(props);

        // Effects make state changes
        if (options.effects instanceof Function) {
          this.effects = options.effects({
            // If we don't bind here these functions will lose their context
            getState: this.getState.bind(this),
            getProps: this.getProps.bind(this),

            // Also inject setState from the React.Component
            setState: super.setState.bind(this),

            // Allow us to bind values to our class without triggering a re-render
            setThis: this.setThis.bind(this),
            getThis: this.getThis.bind(this),
          });
        }
      }

      // We can provide a function as options.initialState
      // allowing us to set the state from the initial props
      static getInitialState(props) {
        if (options.initialState instanceof Function) {
          return options.initialState(props);
        }

        return options.initialState || {};
      }

      componentDidMount() {
        const initialState = withComponentStateful.getInitialState(this.props);

        if (!isEqual(initialState, this.state)) {
          this.setState(withComponentStateful.getInitialState(this.props));
        }
      }

      // Allows the component to ask for the current props if required
      getProps() {
        return this.props;
      }

      /**
       * Returns either the full state,
       * or key from state if defined
       */
      getState(key = undefined) {
        const { state } = this;

        if (key !== undefined) {
          return state[key];
        }

        return state;
      }

      /**
       * Allows us to set values to our class
       * without triggering a re-render
       */
      setThis(values = {}) {
        this.bindings = { ...this.bindings, ...values };
      }

      getThis(key, defaultValue = undefined) {
        return this.bindings[key] || defaultValue;
      }

      render() {
        return (
          <Component
            // Ensure that we always pass parent props to children
            {...this.props}
            // Injected props from this HOC
            {...this.state}
            {...this.effects}
          />
        );
      }
    },
  );
