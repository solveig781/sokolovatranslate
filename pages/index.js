import React from 'react';

import { Page } from 'components';

import HomePage from 'containers/HomePage';
import Contact from 'containers/contact';
import Portfolio from 'containers/portfolio';

function Index() {
  return (
    <>
      <Page fullHeight>
        <HomePage />
      </Page>
      <Page fullHeight>
        <Portfolio />
      </Page>
      <Page fullHeight>
        <Contact />
      </Page>
    </>
  );
}

export default Index;
