import React from 'react';
import styled from 'styled-components';

import { Col, H1 } from 'components';

const StyledHeader = styled(Col)`
  min-height: 200px;

  ${H1} {
    text-align: center;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Col alignItems="center">
        <H1 color="background">Hi</H1>
      </Col>
    </StyledHeader>
  );
}

export default Header;
