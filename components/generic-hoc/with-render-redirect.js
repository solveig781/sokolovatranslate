/* global window */

import { createSink } from 'recompose';
import { identity, always } from 'ramda';
import withPropsGetInitial from './with-props-getinitial';

function resolveLocation(context, location) {
  if (typeof location === 'string') {
    return location;
  }

  if (location instanceof Function) {
    return location(context);
  }

  throw new Error(`Unsupported location type: ${typeof location}`);
}

export default ({
  status = 302,
  location = '/',
  redirectCheck = always(true),
}) =>
  // Simply redirect the user to /tablet/setup
  // NOTE: Uses withPropsGetInitial to bypass the next.js
  //       static page rendering. We don't actually render anything here.
  withPropsGetInitial(async context => {
    const resolvedLocation = resolveLocation(context, location);

    const ensure = await redirectCheck(context);
    if (!ensure) {
      return;
    }

    if (process.browser) {
      window.location.href = resolvedLocation;
      return;
    }

    const { res } = context;
    res.writeHead(status, {
      Location: resolvedLocation,
    });
    res.end();
  })(createSink(identity));
