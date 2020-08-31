import React from 'react';
import styled from 'styled-components';

import { Col, S5 } from 'components';

const Container = styled(Col)`
  display: flex;
  position: relative;
  justify-content: flex-start;

  flex-grow: 1;

  @media (max-width: 400px) {
    flex-grow: 1;
    min-width: 0;
  }
`;

const Text = styled(S5)`
  color: black !important;
  background: white;
  z-index: 1;

  padding: 20px;
  border-radius: 10px;
  font-family: 'Press Start 2P';

  @media (max-width: 400px) {
    padding: 5px;
  }
`;

function chooseSide({ mirror }) {
  if (mirror) {
    return `
        transform: scale(-1, 1);
        left: 60%;
    `;
  }

  return `
      transform: scale(1, 1);
      left: -25px;
  `;
}

const Bachok = styled.svg`
  position: relative;

  ${chooseSide}
`;

function SpeechBalloon({ text = '', mirror = false, className }) {
  const width = 100;
  const height = 60;

  return (
    <Container className={className}>
      <Text>{text}</Text>
      <Bachok
        mirror={mirror}
        width={width}
        height={height}
        viewBox="15 25 100 100"
      >
        <path
          d="M17.5044 99.6043L60.8194 23.1105L105.087 23.1109L17.5044 99.6043Z"
          fill="white"
        />
      </Bachok>
    </Container>
  );
}

export default SpeechBalloon;