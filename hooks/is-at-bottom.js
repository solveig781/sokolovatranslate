/* global window, document */

import { useState, useEffect } from 'react';

export default function(offset = 5) {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const listener = window.addEventListener('scroll', () => {
      setIsAtBottom(
        window.scrollY +
          // Plus the height of the page
          window.innerHeight >
          // Maximum scroll position
          document.body.scrollHeight -
            // and a little bit less
            offset,
      );
    });

    return () => window.removeEventListener('scroll', listener);
  });

  return isAtBottom;
}
