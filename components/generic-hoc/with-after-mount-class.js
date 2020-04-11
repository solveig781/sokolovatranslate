import { propOr } from 'ramda';
import { withState, renameProp, compose } from 'recompose';

import withPropsStripped from './with-props-stripped';
import withDispatchWhenMount from './with-after-mount-dispatch';

export default ({ className }) =>
  compose(
    // Save the current class passed in from props
    // When we've mounted the HOC we'll then append the new
    // className to the end of the one passed in via props
    withState('currentClass', 'setCurrentClass', propOr('', 'className')),

    withDispatchWhenMount({
      timeout: 0,
      dispatcher: ({ setCurrentClass, currentClass }) =>
        setCurrentClass(
          currentClass.length ? `${currentClass} ${className}` : className,
        ),
    }),

    // Overwrite the className from above with our new custom class
    renameProp('currentClass', 'className'),

    // Now removing the setter as we won't use it in the main component
    withPropsStripped('setCurrentClass'),
  );
