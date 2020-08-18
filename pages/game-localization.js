import React from 'react';

import { Page } from 'components';

import Gamehome from 'containers/GameHome';
import GameLanding from 'containers/GameLanding';
import LastGameScroll from 'containers/lastgamescroll';

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
          images={['preview1.png', 'preview2.png']}
          mobileTitle="Party Arena"
          mobileDeveloper="Funture Games"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua"
        />
      </Page>
      <Page fullHeight>
        <GameLanding
          background="#17303F"
          title="Some card shit"
          developer="Bombay Play"
          images={['preview1.png', 'preview2.png']}
        />
      </Page>
      <Page fullHeight>
        <LastGameScroll />
      </Page>
    </>
  );
}

export default Index;
