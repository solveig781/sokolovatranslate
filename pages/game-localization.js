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
        <GameLanding />
      </Page>
      <Page fullHeight>
        <LastGameScroll />
      </Page>
    </>
  );
}

export default Index;
