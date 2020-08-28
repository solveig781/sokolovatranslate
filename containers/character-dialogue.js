import React from 'react';
import styled from 'styled-components';
import { Row, Col, S2 } from 'components';

const Container = styled(Col)`
  justify-content: space-between;

  flex-grow: 1;
  height: 100%;
`;

const TopCharacterBox = styled(Col)`
  justify-content: space-between;
  flex-grow: 1;
  border: 1px solid blue;
`;

const TopSpeach = styled(Col)`
  position: absolute;

  width: 100%;

  ${S2} {
    color: black;
  }
`;

const TopSpeechBalloon = styled.svg`
  position: relative;
  left: 10%;
  top: 10%;
`;

const BottomCharacterBox = styled(Row)`
  flex-grow: 1;
  border: 1px solid red;
`;

const Filler = styled(Col)`
  height: 10%;
`;

function CharacterDialogue() {
  return (
    <Container>
      <TopCharacterBox>
        <TopSpeechBalloon
          width="373"
          height="90"
          viewBox="0 0 373 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M37.381 0C32.9627 0 29.381 3.58173 29.381 8.00001V50.2961L0 90L51.18 64.2073H365C369.418 64.2073 373 60.6256 373 56.2073V8C373 3.58172 369.418 0 365 0H37.381Z"
            fill="#E9E5E5"
          />

          <TopSpeach>
            <S2>Привет!</S2>
          </TopSpeach>
        </TopSpeechBalloon>
        <img width="135" height="125" alt="Game character" src="Fox.png" />
      </TopCharacterBox>
      <Filler />
      <BottomCharacterBox>
        <TopSpeechBalloon />
        <img width="163" height="135" alt="Game character" src="Fox.png" />
      </BottomCharacterBox>
    </Container>
  );
}

export default CharacterDialogue;
