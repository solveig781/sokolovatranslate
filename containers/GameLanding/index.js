import React, { useState } from 'react';
import styled from 'styled-components';

import { Col, Row, H1, H6, S3, Button } from 'components';

import GreyArrowLeft from './greyarrowleft';
import GreyArrowRight from './greyarrowright';

const HomePage = styled(Row)`
  width: 100%;
  height: 100%;
  background: #379683;
  justify-content: space-between;

  span {
    color: white;
  }
  }
`;

const PreviewBox = styled(Col)`
  position: relative;
  top: 8%;
  left: 6%;
  width: 30%;
  height: 70%;
  background: rgba(237, 245, 225, 0.2);

  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    background: rgba(164, 164, 164, 0.2);
  }
`;

const PreviewPic = styled.div`
  margin: 8px;
  border: 0.5px solid #656565;

  height: 50%;

  background: url(preview1.png) no-repeat center center;
  background-size: cover;
`;

const TextContainer = styled(Col)`
  width: 100%;
`;

const GameName = styled(Row)`
  font-size: 28px;
  font-family: Josefin Sans;
  justify-content: center;
  margin: 15px;
`;

const ShortText = styled(Col)`
  font-size: 20px;
  font-family: Lato;
  margin: 30px;
  margin-left: 35px;
  line-height: 30px;
`;

const InfoContainer = styled(Col)`
  width: 60%;
  height: 100%;
  background: rgba(237, 245, 225, 0.2);

  position: relative;
  left: 100vw;
  opacity: 0;

  transition: all 0.5s ease;

  &.visible {
    opacity: 1;
    left: 0;
  }
`;

const MediaContainer = styled(Row)`
  width: auto;
  height: 70%;
  justify-content: space-around;
  align-items: center;

  > ${Button} {
    padding: 0;
    margin: 0;
    border-bottom: none;

    &:hover {
      background: none;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.45));
    }
  }
`;

const BigPicPreview = styled.div`
  width: 80%;
  height: 85%;

  border: 0.5px solid #656565;

  background: url(preview1.png) no-repeat center center;
  background-size: cover;
`;

const BigText = styled(Col)`
  font-size: 20px;
  font-family: Lato;
  margin: 10%;
  margin-top: 5%;
  line-height: 30px;
`;

function GameLanding() {
  // Declare a new state variable, which we'll call "count"
  const [canSee, setCanSee] = useState(false);

  const toggle = () => setCanSee(!canSee);

  return (
    <HomePage>
      <PreviewBox onClick={toggle}>
        <PreviewPic />
        <TextContainer>
          <GameName>
            <H6>Party Arena</H6>
          </GameName>
          <ShortText>
            <S3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </S3>
          </ShortText>
        </TextContainer>
      </PreviewBox>
      <InfoContainer className={canSee && 'visible'}>
        <MediaContainer>
          <Button>
            <GreyArrowLeft />
          </Button>
          <BigPicPreview />
          <Button>
            <GreyArrowRight />
          </Button>
        </MediaContainer>
        <BigText>
          <S3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </S3>
        </BigText>
      </InfoContainer>
    </HomePage>
  );
}

export default GameLanding;
