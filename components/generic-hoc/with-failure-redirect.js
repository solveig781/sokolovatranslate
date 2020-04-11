/* eslint-disable no-console */
import React from "react";

/**
 * Ensure that any component passed to us has a getInitialPropsFunc
 * Else we'll return a shim function which simply returns an empty object
 */
function ensureComponentPropFunc(Component) {
  if (Component.getInitialProps instanceof Function) {
    return Component.getInitialProps;
  }

  return () => ({});
}

export default (redirectLocation = "/") => PageComponent =>
  class extends React.Component {
    /**
     * If we were passed a component which also defines a getInitialProps
     * function, we'll now call that function before continuing.
     *
     * This allows us to nest levels of Next.JS hocs inside each other
     */
    // eslint-disable-next-line class-methods-use-this
    static async getInitialProps(context) {
      try {
        return await ensureComponentPropFunc(PageComponent)(context);
      } catch (error) {
        console.error(error);
        console.info("[Redirecting]");

        // User has a browser fetch error
        if (process.browser) {
          window.location.href = redirectLocation;
          return "";
        }

        // User has triggered a SSR fetch error
        const { res } = context;
        res.writeHead(302, {
          Location: "/"
        });
        res.end();

        return {};
      }
    }

    render() {
      return <PageComponent {...this.props} />;
    }
  };
