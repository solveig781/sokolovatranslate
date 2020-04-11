/* global document */

import { windowIntervalScroll } from './scroll-direction';

if (process.browser) {
  document.addEventListener('keydown', event => {
    switch (event.code) {
      case 'ArrowUp':
        return windowIntervalScroll(-1)(event);

      case 'ArrowDown':
        return windowIntervalScroll(1)(event);

      case 'Space':
        return windowIntervalScroll(event.shiftKey ? -1 : 1)(event);

      default:
        return false;
    }
  });
}
