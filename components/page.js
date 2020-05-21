import React from 'react';
import createTheme from 'styled-theming';
import styled, { ThemeProvider } from 'styled-components';

import { Col } from './flex';
import ScrollDirection, { SCROLL_OVERLAP } from './scroll-direction';

function addBackground({ background }) {
  if (!background) return '';

  return `background: url(/backgrounds/${background}) no-repeat center center fixed;`;
}

const defaultBackground = createTheme('mode', {
  dark: ({ theme }) => theme.primary,
  light: ({ theme }) => theme.secondary,
});

const PageWrapper = styled(Col)`
  width: 100%;
  position: relative;
  overflow: hidden;
  height: calc(100vh + ${SCROLL_OVERLAP}px);

  background-color: ${defaultBackground};
  ${addBackground};

  background-size: cover;
  background-repeat: no-repeat;
  border-bottom: solid 1px darkgrey;

  /* Prevent overscroll on the last page */
  &:last-of-type {
    height: 100vh;
  }
`;

function Page({
  darkMode,
  background,
  children,
  className,
  scrollUp,
  scrollDown,
  ...flexProps
}) {
  return (
    <ThemeProvider theme={{ mode: darkMode ? 'dark' : 'light' }}>
      <PageWrapper
        alignItems="center"
        justifyContent="space-between"
        className={className}
        background={background}
      >
        <ScrollDirection scrollUp={scrollUp} />
        <Col expand {...flexProps}>
          {children}
        </Col>
        <ScrollDirection scrollDown={scrollDown} />
      </PageWrapper>
    </ThemeProvider>
  );
}

export default Page;
