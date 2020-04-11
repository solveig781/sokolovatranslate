import { compose, withState } from 'recompose';

import withPropsStripped from './with-props-stripped';
import withComponentLifecycle from './with-component-lifecycle';

export default compose(
  withState('mountedTime', 'setMountedTime', 0),
  withComponentLifecycle({
    // We'll track the time since the component mounted
    // and then trigger different stages of the animation based
    // on that time.
    //
    // For example after a few seconds we'll hide the typing animation
    didMount({ setMountedTime }) {
      setMountedTime(Date.now());
    },
  }),
  withPropsStripped('setMountedTime'),
);
