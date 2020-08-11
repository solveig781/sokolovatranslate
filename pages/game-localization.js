import React from 'react';

import { Page } from 'components';

import Gamehome from 'containers/GameHome';
import Gamelanding from 'containers/gamelanding';
import LastGameScroll from 'containers/lastgamescroll';

function Index() {
  return (
    <>
      <Page fullHeight>
        <Gamehome />
      </Page>
      <Page fullHeight>
        <Gamelanding />
      </Page>
      <Page fullHeight>
        <LastGameScroll />
      </Page>
    </>
  );
}

export default Index;
