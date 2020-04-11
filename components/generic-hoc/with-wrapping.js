/* eslint-disable react/jsx-props-no-spreading */

import React from "react";

export default FirstComponent => SecondComponent => props => (
  <FirstComponent {...props}>
    <SecondComponent {...props} />
  </FirstComponent>
);
