import styled from 'styled-components';
import createTheme from 'styled-theming';

import { Row } from '../flex';

function addBorderRadius({ scrollUp, scrollDown }) {
  if (scrollUp) {
    return `
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;`;
  }

  if (scrollDown) {
    return `
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;`;
  }

  return '';
}

/**
 * Change color of scroll down and up text based on an injected theme
 * <ThemeProvider theme={{ mode: darkMode ? 'dark' : 'light' }}>
 */
const scrollColor = createTheme('mode', {
  dark: ({ theme }) => theme.shade4,
  light: ({ theme }) => theme.shade1,
});

const scrollBackground = createTheme('mode', {
  light: 'rgba(0,0,0,0.02)',
  dark: 'rgba(255,255,255,0.04)',
});

export const ScrollWrapper = styled(Row)`
  z-index: 99;
  padding: 8px;
  cursor: pointer;
  user-select: none;
  min-width: 80px;
  min-height: 40px;
  transition: all 0.5s ease-in;

  color: ${scrollColor};
  background: ${scrollBackground};

  ${addBorderRadius};

  span {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
