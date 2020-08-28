import React from 'react';

import { Page } from 'components';

import Gamehome from 'containers/GameHome';
import GameLanding from 'containers/GameLanding';
import LastGameLanding from 'containers/LastGameLanding';

import CharacterDialogue from 'containers/character-dialogue';

function Index() {
  return (
    <>
      <Page fullHeight>
        <Gamehome />
      </Page>
      <Page fullHeight>
        <GameLanding
          title="Party Arena"
          developer="Funture Games"
          items={['dialogueonlycharacters.svg', <CharacterDialogue />]}
          mobileTitle="Party Arena"
          mobileDeveloper="Funture Games"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua"
        />
      </Page>
      <Page fullHeight>
        <GameLanding
          background="#550C67"
          title="Some card shit"
          developer="Bombay Play"
          items={['menupic.png', 'preview2.png']}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua"
        />
      </Page>
      <Page fullHeight>
        <LastGameLanding
          background="#26536C"
          title="Last Game Here"
          developer="Bombay Play"
          mobileTitle="Party Arena"
          mobileDeveloper="Funture Games"
          items={['lorepic.png', 'preview2.png']}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua"
        />
      </Page>
    </>
  );
}

export default Index;
