/* eslint-disable no-console */
import { parseCookies } from 'nookies';
import withPropsGetInitial from './with-props-getinitial';

const smallWait = () => new Promise(res => setTimeout(res, 20));

function performRedirect(context, { data: { redirect: url } }) {
  // User is on clientside
  if (process.browser) {
    window.location.href = url;

    // Force the browser not to do something for a second
    // This really seems to force the above to take effecct
    return smallWait();
  }

  const { res } = context;

  // Handle the redirection
  res.writeHead(302, {
    Location: url,
  });
  res.end();
}

/**
 * We assume that all NoToken errors are the same
 * as they come from @sophia-iot/library-errors-moleculer
 */
function ensure(context, { status, type }) {
  if (status !== 401) return false;
  if (type !== 'ERR_NO_TOKEN') return false;

  return true;
}

async function ensureToken(context) {
  const { token: tokenJWT } = parseCookies(context);

  return tokenJWT;
}

export default getInitialPropsFunc =>
  withPropsGetInitial(async context => {
    const tokenJWT = await ensureToken(context);

    try {
      const result = await getInitialPropsFunc(
        Object.assign(context, { tokenJWT }),
      );
      return result || {};
    } catch (error) {
      if (ensure(context, error)) {
        performRedirect(context, error);
        return {};
      }

      // eslint-disable-next-line no-console
      console.error(
        '[Error] in EnsureToken.js:',
        JSON.stringify(error, null, 4),
      );
      throw error;
    }
  });
