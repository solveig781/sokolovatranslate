/* eslint-disable camelcase, react/jsx-props-no-spreading */

import React, { Component } from 'react';
import withWrappedGetInitial from './with-wrapped-getinitial';

/**
 * A simpler wrapper higher-order-component that provides
 * lifecycle hooks in form of callbacks. This wrapper encourages
 * the writing of simple functional components by adding another
 * way of getting lifecycle hook
 */
export default ({
  willMount,
  didMount,
  willUpdate,
  didUpdate,
  willReceiveProps,
}) => Wrapped =>
  withWrappedGetInitial(Wrapped)(
    class withComponenLifecycle extends Component {
      UNSAFE_componentWillMount() {
        if (willMount instanceof Function) {
          willMount(this.getProps());
        }
      }

      componentDidMount() {
        if (didMount instanceof Function) {
          didMount(this.getProps());
        }
      }

      UNSAFE_componentWillReceiveProps(nextProps) {
        if (willReceiveProps instanceof Function) {
          willReceiveProps(nextProps, this.getProps());
        }
      }

      UNSAFE_componentWillUpdate() {
        if (willUpdate instanceof Function) {
          willUpdate(this.getProps());
        }
      }

      componentDidUpdate() {
        if (didUpdate instanceof Function) {
          didUpdate(this.getProps());
        }
      }

      /**
       * Add a helper function getProps
       * Which allows us to later retrieve the current
       * prop set (useful when we're in an interval etc)
       */
      getProps = () => ({
        getProps: this.getProps,
        ...this.props,
      });

      render() {
        return <Wrapped {...this.props} />;
      }
    },
  );
