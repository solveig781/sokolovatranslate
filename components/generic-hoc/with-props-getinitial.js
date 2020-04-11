import { always, curry, merge } from 'ramda';

const ensureCall = maybeFn =>
  (maybeFn instanceof Function && maybeFn) || always({});

function withPropsGetinitial(func, Component) {
  const { getInitialProps } = Component;

  // No next func defined
  // We can simply override it
  if (getInitialProps instanceof Function === false) {
    // eslint-disable-next-line no-param-reassign
    Component.getInitialProps = func;
    return Component;
  }

  // eslint-disable-next-line no-param-reassign
  Component.getInitialProps = async function wrappedGetInitialProps(context) {
    // Call the function provided
    // Gets us props for the current component layer
    const propsForThisComponent = (await ensureCall(func)(context)) || {};

    // Now we'll call the next getInitialProps in our pipeline
    // if we have one, which is likely
    const propsForNextComponent =
      (await ensureCall(getInitialProps)({
        ...context,
        ...propsForThisComponent,
      })) || {};

    return merge(propsForThisComponent, propsForNextComponent);
  };

  return Component;
}

export default curry(withPropsGetinitial);
