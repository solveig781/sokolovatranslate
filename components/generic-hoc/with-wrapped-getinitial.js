/* eslint-disable no-param-reassign */

import { always, curry, merge } from 'ramda';

function withWrapGetinitial(Component, Class) {
  // Nothing to do
  if (!Component.getInitialProps) {
    return Class;
  }

  if (!Class.getInitialProps) {
    Class.getInitialProps = Component.getInitialProps;
    return Class;
  }

  const ensureCall = maybeFn =>
    (maybeFn instanceof Function && maybeFn) || always({});

  // Need to merge the two functions
  Class.getInitialProps = async context => {
    const [ClassProps, ComponentProps] = await Promise.all([
      ensureCall(Class.getInitialProps)(context),
      ensureCall(Component.getInitialProps)(context),
    ]);

    return merge(ClassProps)(ComponentProps);
  };

  return Class;
}

export default curry(withWrapGetinitial);
