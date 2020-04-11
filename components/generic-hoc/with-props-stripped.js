import React from 'react';
import { omit } from 'ramda';

export default (...propsToStrip) => {
  const propOmitter = omit(propsToStrip);

  // Generic hoc that simply strips props
  // This can be useful as part of a composition
  // When we're generating some new props for use inside the composition
  // but we don't really need to pass them down to the children
  return Component => props => <Component {...propOmitter(props)} />;
};
