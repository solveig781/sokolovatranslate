/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import styled from 'styled-components';
import { omit } from 'ramda';

function addBackgroundColor({ dark }) {
  return dark ? 'background-color: #f6f6f6;' : 'background-color: white;';
}

function addSharedStyles() {
  return `
  display: flex;

  width: 100%;
  border: none;
  margin: 8px 0;
  padding: 12px 20px;
  box-sizing: border-box;

  border-radius: 5px;

  &:focus {
    outline: none;
    border-bottom: 2px solid lightblue;
  }
`;
}

const stripProps = omit(['dark']);

export const InputArea = styled(rest => <textarea cols="250" {...stripProps(rest)} />)`
  ${addSharedStyles}
  ${addBackgroundColor}

  min-height: 250px;
`;

export const InputNormal = styled(rest => <input {...stripProps(rest)} />)`
  ${addSharedStyles}
  ${addBackgroundColor}
`;

export const InputPassword = styled(({ dark, type, ...rest }) => (
  <InputNormal dark={dark} type="password" {...stripProps(rest)} />
))``;

function InputWrapper({ type = '', ...rest }) {
  switch (type.toLowerCase()) {
    case 'password':
      return <InputPassword {...rest} />;

    case 'text-area':
      return <InputArea {...rest} />;

    default:
      return <InputNormal {...rest} />;
  }
}

export default InputWrapper;
