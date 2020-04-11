import styled from 'styled-components';

function addHoverEffect({ disabled }) {
  if (disabled) return '';

  return `&:hover {
      color: black;
      background: lightblue;
    }`;
}

function addDisabledEffect({ disabled }) {
  if (!disabled) return '';

  return `
      color: #d2d2d2;
      background: #f3f3f3;
    `;
}

export default styled.button`
  border: none;
  display: inline-block;

  padding: 40px;
  border-radius: 5px;

  cursor: pointer;
  user-select: none;

  color: #333333;
  background: white;
  text-transform: uppercase;
  transition: all 0.4s ease 0s;

  &:focus {
    outline: none;
  }

  ${addHoverEffect}
  ${addDisabledEffect}
`;
