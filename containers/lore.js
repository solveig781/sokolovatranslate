import React from 'react';
import styled from 'styled-components';
import { Row, Col, S6 } from 'components';

const Container = styled(Col)`
  position: relative;
  padding-top: 5%;

  @media (max-width: 450px) {
    padding-top: 0;
  }

  > img {
    @media (max-width: 1090px) {
      transform: scale(0.9, 0.9);
    }

    @media (max-width: 1000px) {
      transform: scale(0.8, 0.8);
    }

    @media (max-width: 890px) {
      transform: scale(0.7, 0.9);
    }

    @media (max-width: 510px) {
      transform: scale(0.6, 1);
    }

    @media (max-width: 450px) {
      transform: scale(0.5, 0.9);
    }

    @media (max-width: 375px) {
      transform: scale(0.45, 0.8);
    }
  }
`;

const BlueBlob = styled(Col)`
  width:100%
  height:100%;
  position: absolute;
  top:-12%;
`;
const ScrollContainer = styled(Col)`
  z-index: 1;
  filter: drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.25));

  @media (max-width: 620px) {
    transform: scale(0.8, 1);
  }

  @media (max-width: 500px) {
    transform: scale(0.7, 1.1);
  }

  @media (max-width: 450px) {
    transform: scale(0.6, 1);
  }
`;

const Text = styled(Col)`
  position: absolute;
  font-family: 'Press Start 2P';
  z-index: 10;

  width: 62%;
  line-height: 18px;
  top: 19%;
  left: 22%;

  @media (max-width: 1000px) {
    width: 54%;
    top: 22%;
    left: 24%;
  }

  @media (max-width: 890px) {
    width: 56%;
    top: 22%;
    left: 24%;
  }

  @media (max-width: 620px) {
    width: 50%;
    top: 19%;
    left: 27%;
  }
  @media (max-width: 500px) {
    width: 42%;
    top: 15%;
    left: 31%;
  }

  @media (max-width: 450px) {
    width: 35%;
    top: 12%;
    left: 33%;
  }

  @media (max-width: 375px) {
    width: 28%;

    top: 19%;
    left: 38%;
  }

  ${S6} {
    font-size: 9px;
    color: #462200 !important;
    padding-top: 2%;
    padding-bottom: 2%;

    @media (max-width: 1000px) {
      font-size: 8px;
      line-height: 15px;
    }

    @media (max-width: 450px) {
      font-size: 7px;
      line-height: 14px;
    }

    @media (max-width: 375px) {
      line-height: 13px;
      font-size: 6px;
    }
  }

  > svg {
    @media (max-width: 890px) {
      transform: scale(0.7);
      align-self: center;
    }
    @media (max-width: 510px) {
      transform: scale(0.6);
      position: absolute;
      top: 52%;
      right: -10%;
    }

    @media (max-width: 450px) {
      right: -20%;
    }

    @media (max-width: 375px) {
      right: -27%;
    }
  }
`;

function Lore() {
  return (
    <Container>
      <Text>
        <S6>
          Legends say, on the shores of the Forgotten Lake, at full moon, there
          grows a mysterious flower with two lonely petals. The White will heal
          any wound, the red will carry you from the most hopeless battle.
          However, the price is rumoured high, Those who have sought and picked,
          were known to soon forget themselves...
        </S6>
        <svg
          width="329"
          height="3"
          viewBox="0 0 329 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            y1="-0.5"
            x2="328.077"
            y2="-0.5"
            transform="matrix(0.999996 -0.00297291 0.00297944 0.999996 0.688477 2.46667)"
            stroke="#462200"
          />
        </svg>
        <S6>
          Легенды гласят, что на берегу Забытого Озера каждое полнолуние цветет
          волшебный цветок о двух лепестках. Белый лепесток исцелит любую рану,
          а красный поможет в самой безнадежной битве. Но у всего есть цена. Те,
          кто срывали цвток, на веки распростились со своей душой...
        </S6>
      </Text>
      <ScrollContainer>
        <img width="600" height="400" alt="Lore Example" src="scrollpic.png" />
      </ScrollContainer>
      <BlueBlob>
        <img width="707" height="543" alt="Blob" src="blueblob3.png" />
      </BlueBlob>
    </Container>
  );
}
export default Lore;
