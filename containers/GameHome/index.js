/* global window */

import React from 'react';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';

import { Col, Row, H1, H3, S2, Button, Toasts } from 'components';

import SpeechBalloon from 'components/speech-balloon';

const HomePage = styled(Col)`
  width: 100%;
  height: 100%;
  background: #3cc37c;
  justify-content: space-between;

  span {
    color: white;
  }

  @media (max-width: 768px) {
    background: #7bc69c;
  }
`;

const Header = styled(Col)`
  align-items: flex-end;
  margin-right: 5%;
  margin-top: 2%;

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

  height: 50%;
`;

const StyledCharacter = styled.div`
  margin-left: 8%;
  margin-top: 4%;
  paddng: 0;

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

  @media (max-width: 768px) {
    padding-right: 5%;
  }

  > ${Button} {
    font-size: 16px;
    padding: 0;
    margin-right: 40px;

    border-bottom: 0;
    text-transform: none;
    font-family: Roboto;

    &:hover {
      color: white;
      background: none;
      border-bottom: 5px solid white;
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
      <Header>
        <H1>Sasha Sokolova</H1>
        <H3>Your game speaks Russian</H3>
      </Header>
      <LeftContainer>
        {/* align character to center with the empty div */}
        <div />
        <CharacterBox>
          <StyledCharacter>
            <img width="153" height="135" alt="Game character" src="Fox.png" />
          </StyledCharacter>
          <MainBalloon
            scaleX={20}
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
      <Toasts.Holder />
    </HomePage>
  );
}
export default Gamehome;
