/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { curry, map } from 'ramda';
import { withPropsGetinitial } from 'components/generic-hoc';

function withProps(propsFuncOrObject, Component) {
  function Wrapper(props) {
    if (propsFuncOrObject instanceof Function) {
      return <Component {...props} {...propsFuncOrObject(props)} />;
    }

    if (propsFuncOrObject instanceof Object) {
      return (
        <Component
          {...props}
          {...map(func => func(props), propsFuncOrObject)}
        />
      );
    }

    throw new Error('withProps(arg) must be a function or object of functions');
  }

  Wrapper.getInitialProps = Component.getInitialProps;

  return withPropsGetinitial(propsFuncOrObject)(Wrapper);
}

export default curry(withProps);
