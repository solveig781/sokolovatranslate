/* global window, document */

import { useState, useEffect } from 'react';

function checkIsAtBottom(offset) {
  if (typeof window === 'undefined') return false;

  return (
    window.scrollY +
      // Plus the height of the page
      window.innerHeight >
    // Maximum scroll position
    document.body.scrollHeight -
      // and a little bit less
      offset -
      1
  );
}

export default function(offset = 5) {
  const [isAtBottom, setIsAtBottom] = useState(checkIsAtBottom(offset));

  useEffect(() => {
    const listener = window.addEventListener('scroll', () => {
      setIsAtBottom(checkIsAtBottom(offset));
    });

    return () => window.removeEventListener('scroll', listener);
  });

  return isAtBottom;
}
