/* global window */

import React from 'react';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';

import { Col, Row, H1, H3, S3, Button, Toasts } from 'components';

import SpeechBalloon from 'components/speech-balloon';
import BlobsLevel from 'components/blobs-level';

const HomePage = styled(Row)`
  width: 100%;
  height: 100%;
  justify-content: space-between;

  span {
    color: #1e4832;
  }

  @media (max-width: 768px) {
    background: #7bc69c;
  }
`;

const HeaderContainer = styled(Col)`
  > ${H1} {
    text-align: right;
  }
`;

const CTAcontainer = styled(Col)`
  border: 1px solid blue;
  margin-bottom: 40%;

  > ${S3} {
    padding-left: 19%;
    max-width: 215px;

    height: 57px;
    text-align: right;
    font-family: Roboto;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.15em;
  }

  > ${Button} {
    margin-top: 20px;
    width: 264px;
    font-size: 20px;
    padding: 15px;
    max-height: 62px;

    background-color: #dc9ef2;
    border-radius: 8px;
    box-shadow: 0px 8px 30px rgba(210, 152, 231, 0.7);

    border-bottom: 0;
    text-transform: none;
    font-family: Roboto;

    &:hover {
      box-shadow: inset 0px 0px 0px 4px #dc9ef2;
      background: none;
      color: #dc9ef2;
    }

    @media (max-width: 460px) {
      font-size: 13px;
      margin-right: 0px;
    }
  }
`;

const Header = styled(Col)`
  align-items: flex-end;
  margin-right: 5%;
  margin-top: 2%;
  border: 2px solid black;
  justify-content: space-between;
  z-index: 1;

  ${H1} {
    font-size: 40px;
    margin-bottom: 5px;
    font-family: Josefin Sans;

    @media (max-width: 340px) {
      font-size: 36px;
    }
  }

  ${H3} {
    font-size: 34px;
    margin-top: 5px;
    font-family: Lato;

    @media (max-width: 430px) {
      font-size: 26px;
    }

    @media (max-width: 340px) {
      font-size: 23px;
      text-align: right;
    }
  }
`;

const CharacterBox = styled(Row)`
  align-items: center;
  margin-top: 20%;

  height: 50%;

  border: 1px solid purple;
`;

const StyledCharacter = styled.div`
  margin-left: 8%;
  margin-top: 4%;
  paddng: 0;
  filter: drop-shadow(0px 10px 30px rgba(112, 63, 40, 0.55));

  border: 1px solid green;

  @media (max-width: 340px) {
    position: relative;
    top: 15%;
  }

  @media (max-width: 390px) {
    transform: scale(0.9, 0.9);

    position: relative;
    top: 10%;
  }

  @media (max-width: 342px) {
    transform: scale(0.7, 0.7);
    position: relative;
    right: 10%;
    top: 20%;
  }
`;

const FooterButtonRow = styled(Row)`
  width: 100%;
  justify-content: space-between;
  min-height: 40px;
  margin-bottom: 3%;

  border: 1px solid yellow;

  @media (max-width: 768px) {
    padding-right: 5%;
  }

  > ${Button} {
    font-size: 16px;
    padding: 0;
    margin-right: 40px;
    color: #1e4832;

    border-bottom: 0;
    text-transform: none;
    font-family: Roboto;

    &:hover {
      background: none;
      border-bottom: 5px solid #1e4832;
    }

    @media (max-width: 460px) {
      font-size: 13px;
      margin-right: 0px;
    }
  }
`;

const LeftContainer = styled(Col)`
  height: 100%;
  justify-content: space-between;
  margin-left: 5%;
  border: 2px solid red;
  z-index: 1;

  @media (min-width: 768px) {
    ${FooterButtonRow} {
      max-width: 40%;
    }
  }

  @media (max-width: 768px) {
    flex-grow: 1;
    margin-right: 5%;
  }
`;

const MainBalloon = styled(SpeechBalloon)`
  position: relative;
  top: -65px;
  margin-right: -10%;

  span {
    color: white;
    background: #766a6a;
  }

  @media (min-width: 768px) {
    max-width: 400px;
  }

  @media (max-width: 342px) {
    left: -50px;
    min-width: 170px;
  }
`;

function openLinkedIn() {
  window.open('https://www.linkedin.com/in/sasha-sokolova-7aa70a177/');
}

function openFacebook() {
  window.open('https://www.facebook.com/solveig781');
}

function Gamehome() {
  return (
    <HomePage>
      <BlobsLevel />

      <LeftContainer>
        {/* align character to center with the empty div */}
        <div />
        <CharacterBox>
          <StyledCharacter>
            <img width="124" height="116" alt="Game character" src="Fox.png" />
          </StyledCharacter>
          <MainBalloon
            scaleX={200}
            scaleY={1}
            text="Привет! Я говорю по-русски! :)"
          />
        </CharacterBox>
        <FooterButtonRow>
          <Button
            onClick={() => {
              Toasts.create.success({
                title: 'Email copied',
                content: <span>Hooray!</span>,
              });
              copy('sokolova.translate@gmail.com');
            }}
          >
            sokolova.translate@gmail.com
          </Button>
          <Button onClick={openFacebook}>facebook</Button>
          <Button onClick={openLinkedIn}>linkedin</Button>
        </FooterButtonRow>
      </LeftContainer>
      <Header>
        <HeaderContainer>
          <H1>Sasha Sokolova</H1>
          <H3>Your game speaks Russian</H3>
        </HeaderContainer>

        <CTAcontainer>
          <S3>
            I tarnslate and localize game content so that it feels Russian
          </S3>

          <Button>Check it out</Button>
        </CTAcontainer>
      </Header>

      <Toasts.Holder />
    </HomePage>
  );
}
export default Gamehome;
