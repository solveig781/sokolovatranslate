import React from 'react';

import { Page } from 'components';

import Gamehome from 'containers/GameHome';
import GameLanding from 'containers/GameLanding';
import LastGameLanding from 'containers/LastGameLanding';

import CharacterDialogue from 'containers/character-dialogue';
import GameMenu from 'containers/game-menu';
import Lore from 'containers/lore';

function Index() {
  return (
    <>
      <Page fullHeight>
        <Gamehome />
      </Page>
      <Page fullHeight>
        <GameLanding
          title="Dialogue Translation"
          developer=""
          items={[<CharacterDialogue />]}
          mobileTitle="Dialogue Translation "
          mobileDeveloper=""
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua"
        />
      </Page>
      <Page fullHeight>
        <GameLanding
          background="#550C67"
          title="UI Interface"
          developer=""
          items={[<GameMenu />]}
          mobileTitle="UI Interface"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua"
        />
      </Page>
      <Page fullHeight>
        <LastGameLanding
          background="#26536C"
          title="Lore Translation"
          developer=""
          mobileTitle="Lore Translation"
          mobileDeveloper=""
          items={[<Lore />]}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua"
        />
      </Page>
    </>
  );
}

export default Index;
