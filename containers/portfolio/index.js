/* global window */

import React from 'react';
import styled from 'styled-components';

import MobilePortfolio from './mobile';
import DesktopPortfolio from './desktop';

function addMediaSize({ maxWidth, minWidth }) {
  let toReturn = '';

  if (maxWidth) {
    // if we specified a max width
    // we should hide this component when the width is larger
    toReturn += `@media (min-width: ${maxWidth + 1}px) { display: none; }`;
  }

  if (minWidth) {
    // if we specified a min width
    // we should hide this component when the width is smaller
    toReturn += `@media (max-width: ${minWidth}px) { display: none; }`;
  }

  return toReturn;
}

const MediaSize = styled.div`
  ${addMediaSize}
`;

function Portfolio() {
  return (
    <>
      <MediaSize minWidth={700}>
        <DesktopPortfolio />
      </MediaSize>
      <MediaSize maxWidth={700}>
        <MobilePortfolio />
      </MediaSize>
    </>
  );
}

export default Portfolio;
