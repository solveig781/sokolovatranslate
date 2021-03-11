/* global window */

import React from 'react';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';

import { Col, Row, H1, H3, S3, Button, Toasts } from 'components';

import SpeechBalloon from 'components/speech-balloon';
import BlobsLevel from 'components/blobs-level';

const HomePage = styled(Col)`
  width: 100%;
  height: 100%;
  flex-grow: 1;
`;
const Header = styled(Col)`
  align-items: flex-end;
  margin-right: 40px;
  margin-left: 40px;
  text-align: right;

  margin-top: 2%;

  justify-content: space-between;
  z-index: 1;

  span {
    color: #1e4832;
  }

  @media (max-width: 420px) {
    margin-right: 18px;
    margin-left: 18px;
  }

  ${H1} {
    font-size: 40px;
    margin-bottom: 5px;
    font-family: Josefin Sans;

    @media (max-width: 420px) {
      font-size: 35px;
      letter-spacing: 0.07em;
    }
  }

  ${H3} {
    font-size: 34px;
    margin-top: 5px;
    font-family: Lato;

    @media (max-width: 420px) {
      font-size: 26px;
      margin-bottom: 10px;
      margin-top: 0;
    }

    @media (max-width: 372px) {
      font-size: 22px;
    }
    @media (max-width: 420px) {
      font-size: 23px;
    }
  }

  ${S3} {
    font-family: Roboto;
    font-size: 16px;
    opacity: 0;

    @media (max-width: 768px) {
      opacity: 1;
    }

    @media (max-width: 420px) {
      font-size: 14px;
      max-width: 189px;
      letter-spacing: 0.15em;
    }
    @media (max-width: 420px) {
      max-width: 236px;
    }
  }
`;

const MiddleRow = styled(Row)`
  height: 100%;
  align-items: center;
  margin-right: 40px;
  margin-left: 40px;
  justify-content: space-between;
  margin-left: 5%;
  z-index: 1;

  positon: relative;

  @media (max-width: 768px) {
    flex-grow: 1;
  }
`;

const CTAcontainer = styled(Col)`
  height: 100%;
  margin-top: 5%;
  justify-content: center;

  @media (max-width: 590px) {
    justify-content: flex-end;
    margin-top: 0;
  }

  > ${S3} {
    padding-left: 19%;
    max-width: 215px;
    text-align: right;
    font-weight: 300;

    height: 57px;
    font-family: Roboto;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.15em;

    @media (max-width: 768px) {
      opacity: 0;
    }
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
    font-weight: bold;

    &:hover {
      box-shadow: inset 0px 0px 0px 4px #dc9ef2;
      background: white;
      color: #dc9ef2;
    }

    @media (max-width: 590px) {
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      margin-bottom: 5%;
    }

    @media (max-width: 460px) {
      font-size: 13px;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
    }

    @media (max-width: 420px) {
      margin-bottom: 11%;
    }
  }
`;

const FooterButtonRow = styled(Row)`
  width: 40%;
  min-height: 40px;

  margin-right: 40px;
  margin-left: 40px;
  margin-bottom: 3%;

  z-index: 1;

  justify-content: space-between;

  @media (max-width: 1000px) {
    width: 89%;
  }

  @media (max-width: 590px) {
    width: 81%;
  }
  @media (max-width: 420px) {
    margin-left: 18px;
    width: 87%;
  }

  > ${Button} {
    font-size: 16px;
    color: #1e4832;
    padding: 0;

    border-bottom: 0;
    text-transform: none;
    font-family: Roboto;

    &:hover {
      background: none;
      border-bottom: 5px solid #1e4832;
    }

    @media (max-width: 460px) {
      font-size: 13px;
      margin-right: 0;
    }

    @media (max-width: 320px) {
      font-size: 12px;
    }
  }
`;

const CharacterBox = styled(Row)`
  align-items: center;

  height: 100%;
  width: 60%;
`;

const StyledCharacter = styled.div`
  margin-left: 18%;
  paddng: 0;
  filter: drop-shadow(0px 10px 30px rgba(112, 63, 40, 0.55));

  @media (max-width: 390px) {
    transform: scale(0.9, 0.9);

    position: relative;
  }

  @media (max-width: 342px) {
    transform: scale(0.7, 0.7);
    position: relative;
    right: 10%;
    top: 20%;
  }
  @media (max-width: 320px) {
    top: -5%;
  }
`;

const MainBalloon = styled(SpeechBalloon)`
  position: relative;
  top: -65px;
  fill="#766A6A";

  svg {
    fill: #766A6A;
  }


  span {
    color: white;
    background: #766a6a;
    @media (max-width: 320px) {
      padding: 10px;
    }
  }

  @media (max-width: 870px) {
    margin-right: 0;
  }
  @media (min-width: 768px) {
    max-width: 400px;
  }
  @media (max-width: 590px) {
    position: absolute;
    top: 37%;
    right: 25%;
    max-width: 42%;
  }
  @media (max-width: 420px) {
    max-width: 49%;
    margin-right: -49px;
  }

  @media (max-width: 387px) {
    max-width: 53%;
  }

  @media (max-width: 320px) {
    top: 37%;
    max-width: 35%;
    right: 40%;
  }
`;

function scrollToPage(numberOfPages) {
  window.scrollTo({
    top: window.innerHeight * numberOfPages,
    left: 0,
    behavior: 'smooth',
  });
}

function scrollNext() {
  scrollToPage(1);
}

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

      <Header>
        <H1>Sasha Sokolova</H1>
        <H3>Your game speaks Russian</H3>
        <S3>I tarnslate and localize game content so that it feels Russian</S3>
      </Header>

      <MiddleRow>
        <CharacterBox>
          <StyledCharacter>
            <img width="124" height="116" alt="Game character" src="Fox.png" />
          </StyledCharacter>
          <MainBalloon
            scaleX={20}
            scaleY={1}
            text="Привет! Я говорю по-русски! :)"
          />
        </CharacterBox>
        <CTAcontainer>
          <S3>
            I tarnslate and localize game content so that it feels Russian
          </S3>
          <Button onClick={scrollNext}>
            <b>Check it out</b>
          </Button>
        </CTAcontainer>
      </MiddleRow>

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

      <Toasts.Holder />
    </HomePage>
  );
}
export default Gamehome;
