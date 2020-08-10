import React from 'react';

import { Page } from 'components';

import Gamehome from 'containers/GameHome';
import Gamelanding from 'containers/gamelanding';
import Portfolio from 'containers/portfolio';

function Index() {
  return (
    <>
      <Page fullHeight>
        <Gamehome />
      </Page>
      <Page fullHeight>
        <Gamelanding />
      </Page>
      <Page fullHeight>This is games site</Page>
    </>
  );
}

export default Index;
