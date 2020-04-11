import { curry, complement as negate } from 'ramda';
import { branch as recomposeBranch, renderComponent } from 'recompose';

/**
 * Default fallback (render nothing) for when a test fails
 */
function noopComponent() {
  return null;
}

/**
 * Takes in a function as it's first parameter, and two components as parameters 2 & 3.
 * The function will then be called with the props which will be passed to each component.
 *
 * If the function returns true, we'll render the first component
 * If the function returns false, we'll render the second component
 *
 * Example:
 * function MyComponent({ test }) {
 *   return <span>{test}</span>
 * }
 *
 * export default branch(({ test }) => test !== 5, MyComponentA, MyComponentB) or
 * export default branch(({ test }) => test !== 5)(MyComponentA, MyComponentB) or
 * export default branch(({ test }) => test !== 5)(MyComponentA)(MyComponentB)
 * result:
 * renders componentA when props.test !== 5
 * renders componentB when props.test === 5
 */
export function branchBase(condition, truthyComponent, falsyComponent) {
  // watch for condition changes
  return recomposeBranch(
    // If this condition(props) returns true we'll render the truthyComponent
    condition,
    // watch for changes inside the truthy component
    renderComponent(truthyComponent),
  )(
    // Will only be rendered if the condition(props) returns false
    // watch for changes inside the falsy component
    falsyComponent,
  );
}

// Curry the branchBase so we can use branch(test)(FirstComponent)(SecondComponent)
export const branch = curry(branchBase);

/**
 * Very similar to the utils/branch functionality
 * Offers rather a curried version where we only accept the truthy component
 * If the first argument passes, we'll render the component else we'll always render null
 *
 * function MyComponent() {
 *    return <span>Hi!</span>
 * }
 *
 * const MyConditionalComponent = renderIf(propEq('test', null))(MyComponent)
 *
 * <MyConditionalComponent test={5} /> => null
 * <MyConditionalComponent test={null} /> => <span>Hi!</span>
 */
function renderIfBase(condition, truthyComponent) {
  return branchBase(condition, truthyComponent, noopComponent);
}

export const renderIf = curry(renderIfBase);

/**
 * Takes a single function
 * Returns a new function, which when called has it's result inverted
 * If that result is true, we'll not render the component
 *
 *
 * function MyComponent() {
 *    return <span>Hi!</span>
 * }
 *
 * const MyConditionalComponent = renderNotIf(propEq('test', null))(MyComponent)
 *
 * <MyConditionalComponent test={null} /> => null
 * <MyConditionalComponent test={5} /> => <span>Hi!</span>
 */
export const renderNotIf = func => renderIf(negate(func));

export default {
  branch,
  renderIf,
  renderNotIf,
};
