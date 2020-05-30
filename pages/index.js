import React, { useState } from 'react';
import ReactPageScroller from 'react-page-scroller';

import { Page } from 'components';

import HomePage from 'containers/HomePage';
import Contact from 'containers/contact';
import Portfolio from 'containers/portfolio';

function Index() {
  const [scroller, setScroller] = useState(null);
  const setPage = scroller && scroller.goToPage;

  return (
    <ReactPageScroller ref={setScroller} animationTimer={500}>
      <Page fullHeight>
        <HomePage setPage={setPage} />
      </Page>
      <Page fullHeight>
        <Portfolio setPage={setPage} />
      </Page>
      <Page fullHeight>
        <Contact setPage={setPage} />
      </Page>
    </ReactPageScroller>
  );
}

export default Index;
