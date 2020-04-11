import React from 'react';
import styled from 'styled-components';

import { Col } from 'components/flex';
import SlideIn from 'components/slide-in';
import Diagonal from 'components/diagonal';

const StyledContent = styled.div`
  /* Prevent expanding if we have sliders */
  max-width: 100vw;
  overflow-x: hidden;

  padding: 60px;

  @media (max-width: 400px) {
    padding: 5px;
  }

  background: ${({ background, theme }) => theme[background] || '#FFF'};
`;

function ContentBox({
  showIn,
  colorIn,
  showOut,
  children,
  colorOut,
  className,
  background,
}) {
  return (
    <Col>
      {showIn && <Diagonal background={colorIn} foreground={background} />}
      <StyledContent
        showIn={showIn}
        showOut={showOut}
        background={background}
        className={className}
      >
        <SlideIn>{children}</SlideIn>
      </StyledContent>
      {showOut && (
        <Diagonal foreground={background} background={colorOut} rotate={180} />
      )}
    </Col>
  );
}

ContentBox.defaultProps = {
  showIn: true,
  showOut: true,
  colorIn: false,
  colorOut: false,
  background: 'shade6',
};

export default ContentBox;
