/* global window */

import React, { useEffect, useState } from 'react';

import MobilePortfolio from './mobile';
import DesktopPortfolio from './desktop';

function getClientType() {
  // we should return the string:
  // 'mobile' when user has mobile device
  // 'desktop' when screen is larger
  if (process.browser === false) {
    return 'desktop';
  }

  if (window.innerWidth < 700) {
    return 'mobile';
  }

  return 'desktop';
}

function Portfolio() {
  // We need to keep the users size in state
  // which can be updated when the user changes their desktop size
  // We'll listen for resize events below and update this variable
  const [clientType, setClientType] = useState(getClientType());

  // Listen for resize events and update the client type (mobile or desktop)
  // when the browsers window size reaches our breakpoint
  useEffect(() => {
    if (process.browser === false) return false;

    // listen for resize events and handle the state change
    const listener = window.addEventListener('resize', () =>
      setClientType(getClientType()),
    );

    // Cleanup the listener when this component gets unmounted
    return () => window.removeEventListener('resize', listener);
  });

  if (clientType === 'mobile') {
    return <MobilePortfolio />;
  }

  return <DesktopPortfolio />;
}

export default Portfolio;
