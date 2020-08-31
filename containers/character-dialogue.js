import React from 'react';
import styled from 'styled-components';
import { Row, Col, S5 } from 'components';

import SpeechBalloon from 'components/speech-balloon';

const Container = styled(Col)`
  justify-content: space-between;
  flex-grow: 1;
  height: 100%;
  border: 2px solid red;
`;

const FoxBox = styled(Col)`
  justify-content: flex-end;
  align-items: flex-end;
  padding-left: 15%;
  padding-top: 10%;

  @media (min-width: 320px) and (max-width: 500px) {
    padding-left: 10%;
  }
`;

const ChamBox = styled(Col)`
  justify-content: flex-end;
  align-items: flex-end;

  padding-right: 15%;
  padding-bottom: 5%;
`;

const Filler = styled(Col)`
  height: 10%;
`;

const BottomRow = styled(Row)`
  justify-content: center;
  flex-grow: 1;
`;

const TopRow = styled(Row)`
  /* justify-content: space-between; */
  flex-grow: 1;
`;

const TopBalloon = styled(SpeechBalloon)`
  max-width: 240px;
  margin-left: 10px;

  @media (max-width: 600px) {
    margin-left: 20px;
  }
`;

const BottomBalloon = styled(SpeechBalloon)`
  max-width: 200px;

  @media (max-width: 600px) {
    margin-left: 20px;
  }
`;

function CharacterDialogue() {
  return (
    <Container>
      <TopRow>
        <FoxBox>
          <img width="135" height="125" alt="Game character" src="Fox.png" />
        </FoxBox>
        <TopBalloon
          scaleX={0.8}
          scaleY={2}
          text="You see, my crops should be harvested and I am just too lazy myself!"
        />
      </TopRow>
      <Filler />

      <BottomRow>
        <BottomBalloon
          mirror
          scaleY={2}
          scaleX={0.8}
          text="Поговорим об оплате."
        />
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
