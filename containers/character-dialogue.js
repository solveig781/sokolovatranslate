import React from 'react';
import styled from 'styled-components';
import { Row, Col, S6, S5 } from 'components';

const Container = styled(Col)`
  justify-content: space-between;
  flex-grow: 1;
  height: 100%;
`;

const TopRow = styled(Row)`
  justify-content: space-between;
  flex-grow: 1;
`;

const FoxBox = styled(Col)`
  justify-content: flex-end;
  align-items: flex-end;
  padding-left: 15%;
  padding-top: 10%;
`;

const TopSpeech = styled(Col)`
  flex-grow: 1;
  position: relative;

  ${S6} {
    position: absolute;
    width: 50%;
    top: 24%;
    left: 6%;

    color: black;
    font-family: 'Press Start 2P';
    line-height: 15px;
  }

  > svg {
    top: 25%;
  }
`;

const BottomRow = styled(Row)`
  justify-content: space-between;
  flex-grow: 1;
`;

const ChamBox = styled(Col)`
  justify-content: flex-end;
  align-items: flex-end;

  padding-right: 15%;
  padding-bottom: 5%;
`;

const BottomSpeech = styled(Col)`
  position: relative;
  align-items: flex-end;
  justify-content: flex-start;
  flex-grow: 1;

  ${S5} {
    position: absolute;
    right: 5%;
    top: 7%;
    width: 40%;
    color: black;
    font-family: 'Press Start 2P';
    line-height: 15px;
  }

  > svg {
    position: relative;
    left: 4%;
  }
`;

const Filler = styled(Col)`
  height: 10%;
`;

const SpeechBalloonStyle = styled.svg`
  position: relative;

  /* Scale the balloon in custom way for different size texts */
  transform: scale(${({ scaleX, scaleY }) => `${scaleX}, ${scaleY}`});

  /* Make the bubbles a bit narrower when screen is small */
  @media (max-width: 500px) {
    transform: scale(${({ scaleX, scaleY }) => `${scaleX * 0.8}, ${scaleY}`});
  }
`;

function SpeechBalloon({ scaleX = 1, scaleY = 1 }) {
  return (
    <SpeechBalloonStyle
      width="351"
      height="73"
      viewBox="0 0 351 73"
      scaleX={scaleX}
      scaleY={scaleY}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.649 0C31.2307 0 27.649 3.58172 27.649 8V40.7591L0 72.9363L48.1614 52.0338H343.001C347.419 52.0338 351.001 48.4521 351.001 44.0338V8C351.001 3.58172 347.419 0 343.001 0H35.649Z"
        fill="#E9E5E5"
      />
    </SpeechBalloonStyle>
  );
}

function CharacterDialogue() {
  return (
    <Container>
      <TopRow>
        <FoxBox>
          <img width="135" height="125" alt="Game character" src="Fox.png" />
        </FoxBox>
        <TopSpeech>
          <SpeechBalloon scaleY={1.5} />
          <S6>
            I need you to do something for me. You see, my crops should be
            harvested and I am just too lazy myself!
          </S6>
        </TopSpeech>
      </TopRow>
      <Filler />

      <BottomRow>
        <BottomSpeech>
          <SpeechBalloon scaleX={-0.8} />
          <S5>Поговорим об оплате.</S5>
        </BottomSpeech>
        <ChamBox>
          <img
            width="125"
            height="112"
            alt="Game character"
            src="chambig.png"
          />
        </ChamBox>
      </BottomRow>
    </Container>
  );
}

export default CharacterDialogue;
