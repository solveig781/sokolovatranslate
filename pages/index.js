import React from 'react';

import { Page } from 'components';

import HomePage from 'containers/HomePage';
import Contact from 'containers/contact';
import Portfolio from 'containers/portfolio';

function Index() {
  return (
    <>
      <Page scrollDown fullHeight>
        <HomePage />
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
