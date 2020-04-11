import React from 'react';

import { Page } from 'components';
import { Header, Portfolio, Contact } from 'containers';

function Index() {
  return (
    <>
      <Page scrollDown fullHeight>
        <Header />
      </Page>
      <Page scrollUp scrollDown fullHeight>
        <Portfolio />
      </Page>
      <Page scrollUp fullHeight>
        <Contact />
      </Page>
    </>
  );
}

export default Index;
