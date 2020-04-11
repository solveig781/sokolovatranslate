import styled from 'styled-components';
import {
  primary as defaultForeground,
  background as defaultBackground,
} from 'components/theme';

function rotateIfRotated({ rotate }) {
  if (!rotate) return '';

  return `transform: rotate(${rotate}deg);`;
}

function addDiagonal({ background, foreground }) {
  const foregroundColor = foreground || defaultForeground;
  const backgroundColor = background || defaultBackground;

  return `
  background:
    linear-gradient(
      to bottom right,
      ${backgroundColor} 0%,
      ${backgroundColor} 50%,
      ${foregroundColor} 50%,
      ${foregroundColor} 100%);
  `;
}

const Diagonal = styled.div`
  width: 100%;
  height: ${({ height }) => height}px;

  ${addDiagonal};
  ${rotateIfRotated}
`;

Diagonal.defaultProps = {
  rotate: 0,
  height: 10,
  background: '',
  foreground: 'shade6',
};

export default Diagonal;
