import React from 'react';
import styled from 'styled-components';

import { Col, Row, H1, H6, S3, Button } from 'components';

const HomePage = styled(Col)`
  width: 100%;
  height: 100%;
  background: #379683;
  padding: 3%;
  padding-left: 7%;
  padding-right: 7%;
  justify-content: space-between;

  span {
    color: white;
  }

  }
`;

const PreviewBox = styled(Col)`
  position: relative;
  top: 2%;
  width: 30%;
  height: 80%;
  background: rgba(237, 245, 225, 0.2);
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

function Gamelanding() {
  return (
    <HomePage>
      <PreviewBox>
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
    </HomePage>
  );
}

export default Gamelanding;
