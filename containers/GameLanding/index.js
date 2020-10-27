import React, { useRef } from 'react';
import { useIsVisible } from 'react-is-visible';

import styled from 'styled-components';

import { Col, Row, H5, Button, Slider } from 'components';

const HomePage = styled(Row)`
  width: 100%;
  height: 100%;
  background: ;
  justify-content: space-between;

  /* Small hack so we can put a div
     at 50% of the height. We'll use this 
     div to show the slider when it becomes visible.
     I.e, when the user has scrolled 50% down the "HomePage" */
  position: relative;

  span {
    color: #1e4832;
  }
`;

const TextContainer = styled(Col)`
  position: relative;
  justify-content: center;
  flex-grow: 1;
  color: #1e4832;

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
  z-index: 1;

  ${H5} {
    font-size: 40px;
    z-index: 1;
  }

  ${Button} {
    z-index: 1;

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

function GameLanding({
  items,
  title,
  developer,
  mobileTitle,
  mobileDeveloper,
  description,
}) {
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef);

  return (
    <HomePage>
      <VisibilityDiv ref={nodeRef} />
      <TextContainer>
        <GameHeader>
          <H5>{title}</H5>
          <Button>{developer}</Button>
        </GameHeader>
      </TextContainer>

      <Slider
        items={items}
        show={isVisible}
        mobileTitle={mobileTitle}
        mobileDeveloper={mobileDeveloper}
        description={description}
      />
    </HomePage>
  );
}

export default GameLanding;
