import React from 'react';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';

import { Col, Row, H1, H6, S3, Button, Toasts } from 'components';

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

const FooterButtonRow = styled(Row)`
  width: 45%;
  justify-content: space-between;

  > ${Button} {
    font-size: 16px;
    padding: 0;
    padding-bottom: 5px;
    border-bottom: 0;
    text-transform: none;
    font-family: Roboto;

    &:hover {
      color: white;
      background: none;
      border-bottom: 5px solid white;
    }
  }
`;

function openLinkedIn() {
  window.open('https://www.linkedin.com/in/sasha-sokolova-7aa70a177/');
}

function openFacebook() {
  window.open('https://www.facebook.com/solveig781');
}

function LastGameScroll() {
  return (
    <HomePage>
      <PreviewBox>
        <PreviewPic />
        <TextContainer>
          <GameName>
            <H6>Last Game</H6>
          </GameName>
          <ShortText>
            <S3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </S3>
          </ShortText>
        </TextContainer>
      </PreviewBox>
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
      <Toasts.Holder />
    </HomePage>
  );
}

export default LastGameScroll;
