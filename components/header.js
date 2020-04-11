import React from 'react';
import styled from 'styled-components';

import { Row } from 'components/flex';
import { primary, background } from 'components/theme';

export const StyledGeneralHeader = styled.div`
  width: 100%;
  font-weight: 600;
  line-height: 20px;
  font-style: normal;
  letter-spacing: -0.01em;

  padding-top: 10px;
  padding-bottom: 10px;

  ${primary};
  ${background};
`;

export const StyledSpan = styled.span`
  width: 70px;
  min-width: 70px;
`;

/*
 * leftNode: The right side of the header
 * rightNode: The right side of the header
 * children: The center of the header
 */
function GeneralHeader({ nodeLeft, nodeRight, children = null, className }) {
  return (
    <StyledGeneralHeader className={className}>
      <Row alignItems="center" justifyContent="space-between">
        {nodeLeft || <StyledSpan />}
        {children}
        {nodeRight || <StyledSpan />}
      </Row>
    </StyledGeneralHeader>
  );
}

export default GeneralHeader;
