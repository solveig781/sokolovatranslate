import React from 'react';
import ButterToast, { Cinnamon } from 'butter-toast';

const DEFAULT_TIMEOUT = 2000;

function info({ title, content, timeout = DEFAULT_TIMEOUT }) {
  return ButterToast.raise({
    timeout,
    content: (
      <Cinnamon.Crisp
        content={content}
        title={title || 'Information'}
        scheme={Cinnamon.Crisp.SCHEME_BLUE}
      />
    ),
  });
}

function error({ title, content, timeout = DEFAULT_TIMEOUT }) {
  return ButterToast.raise({
    timeout,
    content: (
      <Cinnamon.Crisp
        content={content}
        title={title || 'Error!'}
        scheme={Cinnamon.Crisp.SCHEME_RED}
      />
    ),
  });
}

function alert({ title, content, timeout = DEFAULT_TIMEOUT }) {
  return ButterToast.raise({
    timeout,
    content: (
      <Cinnamon.Crisp
        content={content}
        title={title || 'Alert!'}
        scheme={Cinnamon.Crisp.SCHEME_RED}
      />
    ),
  });
}

function success({ title, content, timeout = DEFAULT_TIMEOUT }) {
  return ButterToast.raise({
    timeout,
    content: (
      <Cinnamon.Crisp
        content={content}
        title={title || 'Success!'}
        scheme={Cinnamon.Crisp.SCHEME_GREEN}
      />
    ),
  });
}

function warning({ title, content, timeout = DEFAULT_TIMEOUT }) {
  return ButterToast.raise({
    timeout,
    content: (
      <Cinnamon.Crisp
        content={content}
        title={title || 'Warning!'}
        scheme={Cinnamon.Crisp.SCHEME_ORANGE}
      />
    ),
  });
}

function fromError(toCreate) {
  // eslint-disable-next-line no-console
  console.error(toCreate.message);
  error({
    title: 'Error',
    content: <span>{toCreate.message}</span>,
  });
}

export default {
  info,
  error,
  alert,
  success,
  warning,

  fromError,
};
