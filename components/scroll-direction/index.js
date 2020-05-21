/* global window, document */

import React from 'react';
import { identity } from 'ramda';

import { ScrollWrapper } from './styles';

export const SCROLL_OVERLAP = 0.0001;

export function windowIntervalScroll(windowIntervalOffset) {
  // Prevent testing errors
  if (typeof window === 'undefined') return identity;
  if (typeof document === 'undefined') return identity;

  const calculateNextScrollTop = (offsetBy = 0) => {
    const { innerHeight: height } = window;
    const { scrollTop } = document.scrollingElement;

    // First figure out which page we're on
    // Will return rounded integer, i.e. 2 (second page)
    const currentPage = Math.round((scrollTop + offsetBy) / height);

    // Which page we're trying to get to?
    // Could be +1 or -1 from current
    const nextPage = currentPage + windowIntervalOffset;

    if (nextPage < 1) {
      return 0;
    }

    // Then finaly multiply again by the window height
    // to figure out our new scroll position
    const nextScroll = nextPage * height;

    // Handle those edge cases where we are very close to the top
    // of the current scroll window, but actually still mostly on a previous page
    // In this case we'll offset back a bit and then recalculate
    if (Math.abs(nextScroll - scrollTop) < 50) {
      return calculateNextScrollTop(nextScroll - scrollTop);
    }

    return (
      nextScroll +
      // Add a little bit for each page we've seen
      (nextPage + 1) * SCROLL_OVERLAP
    );
  };

  return event => {
    event.preventDefault();

    window.scroll({
      left: 0,
      behavior: 'smooth',
      top: calculateNextScrollTop(),
    });
  };
}

function ScrollDirection({ className, scrollUp, scrollDown }) {
  if (scrollUp) {
    return (
      <ScrollWrapper
        alignItems="flex-end"
        scrollUp={scrollUp}
        className={className}
        scrollDown={scrollDown}
        onClick={windowIntervalScroll(-1)}
      >
        <span>return</span>
      </ScrollWrapper>
    );
  }

  if (scrollDown) {
    return (
      <ScrollWrapper
        alignItems="flex-start"
        scrollUp={scrollUp}
        className={className}
        scrollDown={scrollDown}
        onClick={windowIntervalScroll(+1)}
      >
        <span>continue</span>
      </ScrollWrapper>
    );
  }

  return <span />;
}

export default ScrollDirection;
