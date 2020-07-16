import React from 'react';
import styled from 'styled-components';
import ButterToast, { POS_TOP, POS_CENTER } from 'butter-toast';

const ButterToastStyled = styled(ButterToast)`
  z-index: 200;
`;

function Toasts({ className, vertical, horizontal }) {
  return (
    <ButterToastStyled
      className={className}
      position={{
        vertical: vertical || POS_TOP,
        horizontal: horizontal || POS_CENTER,
      }}
    />
  );
}

export default Toasts;
