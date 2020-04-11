import Validator from 'fastest-validator';
import { withHandlers, withProps } from 'recompose';
import {
  always,
  clone,
  compose,
  curry,
  indexBy,
  map,
  merge,
  omit,
  path,
  prop,
  when,
} from 'ramda';

import withPropsStripped from './with-props-stripped';
import withComponentStateful from './with-component-stateful';

function getInitialState(
  options,
  { initialState, defaultState = {}, ...props },
) {
  // We'll allow the caller to specify a defaultState
  // this can be used to ensure intialisation is performed
  // correctly, and that we have all items of state in correct type
  const mergedDefault = merge(defaultState);

  if (initialState instanceof Function) {
    return mergedDefault(initialState(props));
  }

  if (initialState) {
    return mergedDefault(initialState);
  }

  if (options.initialState instanceof Function) {
    return mergedDefault(options.initialState(props));
  }

  if (options.initialState) {
    return mergedDefault(options.initialState);
  }

  return mergedDefault({});
}

export default function withForm(options = {}) {
  const defaultPipeline = compose(
    withComponentStateful({
      initialState: props => ({
        form: getInitialState(options, props),
      }),

      effects: ({ setState, getState }) => ({
        formGet(key, defaultValue) {
          const { form } = getState();
          return form[key] || defaultValue;
        },

        /**
         * Allows us to update the form by passing a key and value
         */
        formUpdateKey: curry((key, value) => {
          // Wrap with a promise so that we can
          // perform other actions after the state change
          return new Promise(res =>
            setState(({ form }) => {
              const nextState = merge(form, {
                [key]: value,
              });

              // Make sure to resolve our promise
              // with the new form contents
              res(nextState);

              // Update the form state
              return { form: nextState };
            }),
          );
        }),
      }),
    }),

    withHandlers({
      /**
       * Allows us to update the form by generating an onChange
       * function which will accept an event (from input)
       */
      formUpdateKeyEvent: ({ formUpdateKey }) =>
        curry((key, { target }) => formUpdateKey(key, target.value)),
    }),

    // Now create a form object which can be used to more easily access
    // our form functionality.
    withProps(({ form, formGet, formUpdateKey, formUpdateKeyEvent }) => ({
      form: {
        submit: when(
          // If we passed in an onSubmit
          // We'll call it by using form.submit()
          always(options.onSubmit instanceof Function),
          () => options.onSubmit(form),
        ),
        get: formGet,
        values: form,
        updateKey: formUpdateKey,
        updateKeyEvent: formUpdateKeyEvent,
      },
    })),

    withPropsStripped('formGet', 'formUpdateKey', 'formUpdateKeyEvent'),
  );

  // No schema defined
  // We don't need any validator
  if (options.schema === undefined) {
    return defaultPipeline;
  }

  const schemaChecker = new Validator().compile(options.schema);

  function validateForm(form) {
    const result = schemaChecker(form);
    if (result === true) {
      return {};
    }

    return map(omit(['field']), indexBy(prop('field'), result));
  }

  return compose(
    defaultPipeline,

    // Now we'll attach our validator
    // We will use the schema passed in to our options
    // This will update every time we call setState in the withForm component
    withProps(props => {
      const { preValidate = path(['form', 'values']) } = options;

      const formErrors = validateForm(clone(preValidate(props)));

      return {
        form: merge(props.form)({
          errors: formErrors,
          isValid: Object.values(formErrors).length === 0,
        }),
      };
    }),
  );
}
