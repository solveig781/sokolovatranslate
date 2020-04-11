import React, { useContext } from 'react';
import { curry } from 'ramda';

function withContext(Context, Component) {
  function ContextWrapper(props) {
    const contextProps = useContext(Context);

    return <Component {...props} {...contextProps} />;
  }

  ContextWrapper.getInitialProps = Component.getInitialProps;

  return ContextWrapper;
}

export default curry(withContext);
