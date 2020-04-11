import React from 'react';

/**
 * Waits for some time after mounting a component
 * Then calls a function specified by the user
 */
export default (config = {}) => Component =>
  class extends React.Component {
    componentDidMount() {
      const { dispatcher, initialTest, timeout, interval } = config;

      if (dispatcher instanceof Function === false) {
        throw new Error('config.dispatcher must be a function');
      }

      // We can also pass in an intial props test
      // If this returns false we'll not perform any dispatches
      if (initialTest instanceof Function) {
        if (initialTest(this.props) === false) {
          return;
        }
      }

      if (Number.isInteger(timeout)) {
        this.timeout = setTimeout(this.timeoutCallback, timeout);
      }

      if (Number.isInteger(interval)) {
        this.interval = setInterval(this.intervalCallback, interval);
      }
    }

    componentWillUnmount() {
      clearTimeout(this.timeout);
      clearInterval(this.interval);
    }

    timeoutCallback = () => {
      config.dispatcher(this.props);
    };

    intervalCallback = () => {
      const result = config.dispatcher(this.props);

      // We can return false from the dispatcher to prevent further actions
      if (result === false) {
        clearInterval(this.interval);
      }
    };

    render() {
      return <Component {...this.props} />;
    }
  };
