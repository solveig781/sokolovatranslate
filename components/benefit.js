import React from 'react';
import styled from 'styled-components';

import { Col } from 'components/flex';
import { H5, S4 } from 'components/text';

const BenefitContainer = styled(Col)`
  margin: 20px;

  width: 30%;

  @media (max-width: 512px) {
    width: 100%;
  }
`;

function Benefit({ icon, title, description, className }) {
  return (
    <BenefitContainer className={className}>
      {icon}
      <H5>{title}</H5>
      <S4 color="shade4">{description}</S4>
    </BenefitContainer>
  );
}

export default Benefit;
