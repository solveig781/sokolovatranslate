/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import ErrorPage from 'next/error';

import withPropsGetinitial from './with-props-getinitial';

export default function withErrorPage(Component) {
  function Wrapper({ statusCode, ...props }) {
    if (statusCode !== 200) {
      const { errorMessage } = props;
      return <ErrorPage title={errorMessage} statusCode={statusCode} />;
    }

    return <Component {...props} />;
  }

  Wrapper.getInitialProps = Component.getInitialProps;

  return withPropsGetinitial(async context => {
    try {
      // Can't check res in browser
      if (process.browser) {
        return { statusCode: 200 };
      }

      const { statusCode } = context.ctx.res;
      return { statusCode };
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);

      // Probably a JS error
      if (!error.statusCode) {
        throw error;
      }

      return {
        errorMessage: error.message,
        statusCode: error.statusCode,
      };
    }
  })(Wrapper);
}
