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

  @media (max-height: 568px), (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    margin: 4px;
    margin-left: 5%;
    margin-bottom: 5%;
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
  margin-left: 3%;
  margin-bottom: 20px;

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
{
  /* 
const BottomSpeech = styled(SpeechBalloon)`
  position: relative;
  top: -40px;

  > span {
    font-size: 10px;
    padding: 10px;
  }
`;
*/
}

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
          <img width="38" height="37" alt="Game character" src="Fox.png" />
        </StyledCharacter>
        {/* 
        <BottomSpeech scaleX={0.5} scaleY={0.1} bachokHeight={0.5} text="" />
        */}
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

      <AbsoluteSvg
        width="1440"
        height="91"
        viewBox="0 0 1440 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.465088" width="1912.06" height="90.5349" fill="#EDD2A7" />
      </AbsoluteSvg>
    </Footer>
  );
}
