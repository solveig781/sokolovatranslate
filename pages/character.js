import React from 'react';
import styled from 'styled-components';

import CharacterDialogue from 'containers/character-dialogue';

const BG = styled.div`
  flex-grow: 1;
  height: 100vh;
  background-color: #667788;
`;

export default function() {
  return (
    <BG>
      <CharacterDialogue />
    </BG>
  );
}
