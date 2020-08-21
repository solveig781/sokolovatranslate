import React, { useRef } from 'react';
import { useIsVisible } from 'react-is-visible';

import styled from 'styled-components';

import { useIsAtBottom } from 'hooks';
import { Col, Row, H5, Button, Slider } from 'components';
import BottomBar from './bottombar';

const HomePage = styled(Col)`
  width: 100%;
  height: 100%;
  background: ${({ background }) => background};
  justify-content: space-between;

  /* Small hack so we can put a div
     at 50% of the height. We'll use this 
     div to show the slider when it becomes visible.
     I.e, when the user has scrolled 50% down the "HomePage" */
  position: relative;

  span {
    color: white;
  }
`;

const TextContainer = styled(Col)`
  flex-grow: 1;
  position: relative;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const GameHeader = styled(Col)`
  position: relative;

  font-family: Josefin Sans;
  justify-content: center;
  align-items: center;
  margin: 15px;
  letter-spacing: 0.05em;

  ${H5} {
    font-size: 40px;
  }

  ${Button} {
    background: none;
    padding: 10px;
    text-transform: none;
    font-family: Josefin Sans;
    border-bottom: none;
    font-size: 25px;
    color: #d9d4d4;
    max-height: 40px;

    &:hover {
      color: white;
      background: none;
      border-bottom: 4px solid #d9d4d4;
    }
  }
`;

const VisibilityDiv = styled.div`
  position: absolute;
  top: 50%;
`;

const SliderRow = styled(Row)`
  flex-grow: 1;
`;

function LastGameLanding({
  images,
  title,
  developer,
  mobileTitle,
  mobileDeveloper,
  description,
  background = '#379683',
}) {
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef);
  const isAtBottom = useIsAtBottom(5);

  return (
    <HomePage background={background}>
      <SliderRow>
        <VisibilityDiv ref={nodeRef} />
        <TextContainer>
          <GameHeader>
            <H5>{title}</H5>
            <Button>{developer}</Button>
          </GameHeader>
        </TextContainer>

        <Slider
          className={isAtBottom && 'hide-description'}
          images={images}
          show={isVisible}
          mobileTitle={mobileTitle}
          mobileDeveloper={mobileDeveloper}
          description={description}
        />
      </SliderRow>
      <BottomBar />
    </HomePage>
  );
}

export default LastGameLanding;
