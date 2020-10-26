import React from 'react';
import styled from 'styled-components';

import { Col, S5 } from 'components';

const Text = styled(S5)`
  z-index: 1;
  background: white;
  padding: 20px;
  border-radius: 10px;
  font-family: 'Press Start 2P';
  line-height: 15px;

  @media (max-width: 460px) {
    font-size: 10px;
    padding: 15px;
  }

  @media (max-width: 360px) {
    font-size: 9px;
  }
`;

const Bachok = styled.svg`
  position: relative;

  left: 2px;
`;

const Container = styled(Col)`
  display: flex;
  position: relative;
  justify-content: flex-start;

  flex-grow: 1;

  &.mirror {
    /* Reverse the entire container */
    transform: scale(-1, 1);

    ${Text} {
      /* But then reverse the text back so it's normal again */
      transform: scale(-1, 1);
    }
  }
`;

function SpeechBalloon({
  text = '',
  className = '',
  mirror = false,
  bachokHeight = 1,
}) {
  const width = 50;
  const height = 50;

  // We should be with the bubble on the right
  if (mirror) {
    // Add the "mirror" class so we can style it
    // eslint-disable-next-line no-param-reassign
    className += ' mirror';
  }

  return (
    <Container className={className}>
      <Text>{text}</Text>
      <Bachok
        width={width}
        height={height * bachokHeight}
        viewBox="10 25 100 100"
      >
        <path
          d="M17.5044 99.6043L60.8194 23.1105L105.087 23.1109L17.5044 99.6043Z"
          fill="#766A6A"
        />
      </Bachok>
    </Container>
  );
}

export default SpeechBalloon;
