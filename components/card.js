import React from 'react';
import styled from 'styled-components';

import { isEmpty, complement } from 'ramda';
import { Col, Row } from 'components/flex';

const hasActions = complement(isEmpty);

const Title = styled.span`
  color: lightgrey;
`;

const CardStyle = styled(Col)`
  min-width: 200px;
  min-height: 200px;

  padding: 16px;
  border-radius: 4px;
  border: 1px solid lightgrey;

  background: white;
`;

function Card({
  title,
  actions,
  children,
  className,
  onClick,
  alignItems,
  justifyContent = 'space-between',
}) {
  return (
    <CardStyle
      onClick={onClick}
      className={className}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      <Title>{title}</Title>
      {children}
      {hasActions(actions) && <Row justifyContent="flex-end">{actions}</Row>}
    </CardStyle>
  );
}

export default Card;
