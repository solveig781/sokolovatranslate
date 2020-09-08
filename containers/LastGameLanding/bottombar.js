/* global window */

import React from 'react';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';

import { useIsAtBottom } from 'hooks';
import { Row, Button, Toasts } from 'components';

import SpeechBalloon from 'components/speech-balloon';

const Footer = styled(Row)`
  position: absolute;
  justify-content: space-between;

  width: 100%;
  bottom: 0;

  transition: 0.5s all ease;

  &.invisible {
    bottom: -30vh;
  }

  @media (max-width: 768px) {
    flex-direction: row-reverse;
  }
`;

const FooterButtonRow = styled(Row)`
  position: relative;
  padding: 0;

  margin: 2%;
  margin-right: 5%;
  width: 40%;
  z-index: 10;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 90%;
    margin: 5%;
    margin-top: 7%;
  }

  > ${Button} {
    font-size: 16px;
    padding: 0;
    color: #515151;

    border-bottom: 0;
    text-transform: none;
    font-family: sans-serif;

    &:hover {
      color: #515151;
      background: none;
      border-bottom: 5px solid #515151;
    }

    @media (max-width: 450px) {
      font-size: 13px;
    }
  }
`;

const CharacterBox = styled(Row)`
  justify-content: center;
  align-items: flex-end;
  z-index: 1;
  margin-left: 5%;

  @media (max-width: 768px) {
    width: 0;
    opacity: 0;
  }
`;

const StyledCharacter = styled.div`
  bottom: 5px;
  left: 5%;
  margin: 0;
`;

const BottomSpeech = styled(SpeechBalloon)`
  position: relative;
  top: -40px;

  > span {
    font-size: 10px;
    padding: 10px;
  }
`;

const AbsoluteSvg = styled.svg`
  position: absolute;
  bottom: 0;
`;

function openLinkedIn() {
  window.open('https://www.linkedin.com/in/sasha-sokolova-7aa70a177/');
}

function openFacebook() {
  window.open('https://www.facebook.com/solveig781');
}

export default function BottomBar() {
  const isAtBottom = useIsAtBottom(5);

  return (
    <Footer className={!isAtBottom && 'invisible'}>
      <CharacterBox>
        <StyledCharacter>
          <img width="70" height="73" alt="Game character" src="Fox.png" />
        </StyledCharacter>
        <BottomSpeech
          scaleX={0.5}
          scaleY={0.1}
          bachokHeight={0.5}
          text="And more!"
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
          <b>sokolova.translate@gmail.com</b>
        </Button>

        <Button onClick={openFacebook}>facebook</Button>
        <Button onClick={openLinkedIn}>linkedin</Button>
      </FooterButtonRow>

      <AbsoluteSvg
        width="4424"
        height="130"
        viewBox="0 0 4424 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 129.636H1521.3L1521.87 127.66L1522.54 130H4424V34.5905C4424 34.5905 4081.96 4.84532 3952.45 16.0185C3822.93 27.1916 3630.41 32.0414 3534.4 32.0414C3509.62 32.0414 3492.13 32.2029 3477.75 32.3357H3477.75C3441.95 32.6663 3424.89 32.0414 3362.38 32.3357C3341.6 31.3361 3265.76 30.6058 3249.87 29.8565C3168.08 26.0013 3196.3 29.828 3089.85 22.018C3030.61 17.6719 3015.18 15.5926 3002.34 14.1977C2986.13 12.437 2964.05 10.411 2889.83 6.55036L2580.29 15.3981L2871.57 22.018C2766.7 15.5581 2640.24 10.1562 2572.29 16.0185C2442.78 27.1916 2250.25 32.0414 2154.24 32.0414C2129.47 32.0414 2111.98 32.2029 2097.59 32.3357C2061.79 32.6663 2045.28 32.8188 1983.72 29.8565C1962.95 28.8568 1945.09 28.0147 1929.19 27.2654C1847.4 23.4103 1817.64 22.0077 1711.19 14.1977C1651.96 9.85161 1634.22 7.92466 1621.38 6.52973C1608.24 5.10244 1600.23 4.23223 1558.13 1.89738L1521.17 0.0938749C1518.17 -0.00446905 1515.3 -0.0555219 1512.46 0.0938399L1485.51 1.54478C1443.59 3.87109 1435.59 4.74059 1422.47 6.16557C1409.63 7.56051 1391.89 9.48745 1332.65 13.8335C1226.2 21.6435 1196.44 23.0461 1114.66 26.9013C1098.76 27.6506 1080.89 28.4927 1060.12 29.4923C998.564 32.4545 982.053 32.3021 946.253 31.9716H946.249C931.868 31.8387 914.375 31.6773 889.601 31.6773C793.59 31.6773 601.068 26.8275 471.553 15.6543C342.039 4.48116 0 34.2264 0 34.2264V129.636Z"
          fill="#EACD9E"
        />
      </AbsoluteSvg>
    </Footer>
  );
}
