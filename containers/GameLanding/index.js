import React, { useState } from 'react';
import styled from 'styled-components';

import { Col, Row, H5, S3, Button } from 'components';
import Slider from './slider';

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
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);

  cursor: pointer;
  &:hover {
    background: rgba(71, 71, 71, 0.2);
  }
`;

const PreviewPic = styled.div`
  margin: 8px;
  border: 0.5px solid #9c9c9c;

  height: 65%;

  background: url(preview1.png) no-repeat center center;
  background-size: cover;
`;

const TextContainer = styled(Col)`
  justify-content: center;
  width: 100%;
  height: 30%;
`;

const GameName = styled(Col)`
  font-size: 32px;
  font-family: Josefin Sans;
  justify-content: center;
  align-items: center;
  margin: 15px;
  letter-spacing: 0.05em;

  ${H5} {
    font-size: 40px;
  }
`;
const ShortText = styled(Row)`
  position: absolute;
  width: 35%;
  left: 45%;
  align-self: center;

  height: 15%;
  margin: 30px;

  font-family: Lato;
  line-height: 40px;

  ${S3} {
    font-size: 24px;
  }
`;

function GameLanding() {
  // Declare a new state variable, which we'll call "count"
  const [canSee, setCanSee] = useState(false);

  const toggle = () => setCanSee(!canSee);

  const imagesToPass = ['preview1.png', 'preview2.png'];

  return (
    <HomePage>
      <PreviewBox onClick={toggle}>
        <PreviewPic />
        <TextContainer>
          <GameName>
            <H5>Party Arena</H5>
          </GameName>
        </TextContainer>
      </PreviewBox>
      <ShortText>
        <S3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </S3>
      </ShortText>
      <Slider show={canSee} images={imagesToPass} />
    </HomePage>
  );
}

export default GameLanding;
