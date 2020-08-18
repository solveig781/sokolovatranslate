import React, { useRef } from 'react';
import { useIsVisible } from 'react-is-visible';

import styled from 'styled-components';

import { Col, Row, H5, Button, Slider } from 'components';

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

const FooterButtonRow = styled(Row)`
  position: absolute;
  bottom: 0;
  border: 1px solid black;
  width: 40%;
  justify-content: space-between;
  min-height: 40px;
  margin: 3%;

  @media (max-width: 768px) {
    padding-right: 5%;
  }

  > ${Button} {
    font-size: 16px;
    padding: 0;

    border-bottom: 0;
    text-transform: none;
    font-family: Roboto;

    &:hover {
      color: white;
      background: none;
      border-bottom: 5px solid white;
    }

    @media (max-width: 340px) {
      font-size: 13px;
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

function openLinkedIn() {
  window.open('https://www.linkedin.com/in/sasha-sokolova-7aa70a177/');
}

function openFacebook() {
  window.open('https://www.facebook.com/solveig781');
}

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
          images={images}
          show={isVisible}
          mobileTitle={mobileTitle}
          mobileDeveloper={mobileDeveloper}
          description={description}
        />
      </SliderRow>
      <FooterButtonRow>
        <Button
          onClick={() => {
            Toasts.create.success({
              title: 'Email copied',
              content: <span>Hooray!</span>,
            });
            copy('hisasha781@gmail.com');
          }}
        >
          hisasha781@gmail.com
        </Button>
        <Button onClick={openFacebook}>facebook</Button>
        <Button onClick={openLinkedIn}>linkedin</Button>
      </FooterButtonRow>
    </HomePage>
  );
}

export default LastGameLanding;
