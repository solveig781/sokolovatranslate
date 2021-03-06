import React from 'react';
import styled from 'styled-components';
import { Row, Col, S5 } from 'components';

import SpeechBalloon from 'components/speech-balloon';

const Container = styled(Col)`
  justify-content: space-between;
  flex-grow: 1;
  height: 100%;
  z-index: 1;
`;
const GreenBlob = styled(Col)`
  width:100%
  height:100%;
  position: absolute;
  right:3%;
  z-index: -1;
`;

const TopRow = styled(Row)`
  /* justify-content: space-between; */
  flex-grow: 1;
`;

const FoxBox = styled(Col)`
  justify-content: flex-end;
  align-items: flex-end;
  padding-left: 15%;
  padding-top: 7%;
  filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.25));

  @media (max-width: 530px) {
    padding-left: 5%;
  }

  > img {
    filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.3));
    @media (max-width: 360px) {
      transform: scale(0.9, 0.9);
    }
  }
`;

const TopBalloon = styled(SpeechBalloon)`
  max-width: 40%;
  margin-left: 10px;
  padding-top: 2%;

  > span {
    background-color: #766a6a;
    color: white;
  }

  @media (max-width: 600px) {
    margin-left: 20px;
  }

  @media (max-width: 460px) {
    max-width: 50%;
    margin-left: 10px;
  }

  @media (max-width: 360px) {
    margin-right: 10px;
    margin-left: 0;
    max-width: 55%;
  }
`;

const Filler = styled(Col)`
  height: 10%;
`;

const BottomRow = styled(Row)`
  justify-content: flex-end;
  flex-grow: 1;
`;

const ChamBox = styled(Col)`
  justify-content: flex-end;
  align-items: flex-end;

  padding-bottom: 2%;
  padding-right: 20%;
  @media (max-width: 530px) {
    padding-right: 5%;
  }

  > img {
    filter: drop-shadow(0px 20px 50px rgba(0, 0, 0, 0.5));

    @media (max-width: 360px) {
      transform: scale(0.9, 0.9);
    }
  }
`;

const BottomBalloon = styled(SpeechBalloon)`
  max-width: 30%;
  margin-right: 10px;
  filter: drop-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  
  > span {
    padding-right: 0;
    background-color: #766a6a;
    color: white;
    }

    @media (max-width: 380px) {
      padding-right: 10px;
    }
  }

  @media (max-width: 850px) {
    margin-right: 20px;
  }

  @media (max-width: 600px) {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (max-width: 380px) {
    max-width: 40%;
  }
`;

function CharacterDialogue() {
  return (
    <Container>
      <GreenBlob>
        <img width="554" height="512" alt="Blob" src="greenblob.png" />
      </GreenBlob>
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
          scaleX={0.8}
          scaleY={2}
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
