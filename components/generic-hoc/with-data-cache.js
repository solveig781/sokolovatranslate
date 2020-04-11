import { prop } from 'ramda';
import { compose, withProps, withPropsOnChange } from 'recompose';

import withComponentStateful from './with-component-stateful';

function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

export default function withDataCache(propName) {
  const propAccessor = prop(propName);
  const propSetter = `set${capitalize(propName)}`;

  return compose(
    withComponentStateful({
      initialState: props => ({
        lastUpdate: Date.now(),

        // Local cache of getInitialProps data
        temporaryData: propAccessor(props),
      }),
      effects: ({ setState }) => {
        return {
          [propSetter](newData) {
            setState({
              lastUpdate: Date.now(),
              temporaryData: newData,
            });
          },
        };
      },
    }),

    withPropsOnChange([propName], props =>
      props[propSetter](propAccessor(props)),
    ),

    withProps(props => ({
      ...props,
      [propName]: propAccessor(props),
    })),
  );
}
