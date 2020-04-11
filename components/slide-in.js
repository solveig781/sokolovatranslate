import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import { useIsVisible } from 'react-is-visible';

import { UserContext } from 'contexts';

const StyledSlider = styled.div`
  left: 0;
  opacity: 1;
  filter: none;
  position: relative;
  transition: all 0.8s ease-in;

  &.hidden {
    left: 100%;
    opacity: 0;
    filter: blur(0.4rem);

    @media (max-width: 480px) {
      left: 0;
      opacity: 1;
      filter: none;
    }
  }

  /* Mobile performance boost */
  transform: translateZ(0);
  backface-visibility: hidden;
  transform-style: preserve-3d;
`;

function SlideIn({ children, className }) {
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef);
  const { isCrawler } = useContext(UserContext);
  const shouldShow = isCrawler || isVisible;

  return (
    <StyledSlider
      ref={nodeRef}
      className={
        // Are we a web crawler, or is the block already visible?
        shouldShow
          ? // We'll display everything
            className
          : // We'll slide the content in
            `${className} hidden`
      }
    >
      {children}
    </StyledSlider>
  );
}

export default SlideIn;
