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

const Text = styled(Col)`
  position: absolute;
  z-index: 1;
  font-family: 'Press Start 2P';

  width: 50%;
  line-height: 18px;
  top: 22%;
  left: 26%;

  @media (max-width: 1000px) {
    width: 45%;
    top: 25%;
    left: 28%;
  }

  @media (max-width: 890px) {
    width: 40%;
    top: 22%;
    left: 32%;
  }
  @media (max-width: 510px) {
    width: 35%;
    top: 20%;
    left: 35%;
  }

  @media (max-width: 450px) {
    width: 31%;

    top: 17%;
    left: 36%;
  }

  @media (max-width: 375px) {
    width: 28%;

    top: 19%;
    left: 38%;
  }

  ${S6} {
    font-size: 9px;
    color: #462200 !important;
    padding-top: 5%;
    padding-bottom: 5%;

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
          Legends say, by the Forgotten Lake shores on the full moon only there
          grows a mysterious flower with just two petals. White one can heal any
          wound and the red one will carry you out from the most hopeless
          battle. But it comes with a price. Those who have ever picked it, were
          known to forget who they were...
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
      <img width="723" height="479" alt="Lore Example" src="scrollpic.png" />
    </Container>
  );
}
export default Lore;
