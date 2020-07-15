import styled from 'styled-components';

import { Col, P4, P5, Row, S4 } from 'components';

export const HeaderButtonContainer = styled(Row)`
  left: 0;
  z-index: 10;

  width: 100%;
  min-height: 80px;

  justify-content: center;
  align-items: center;
  padding-top: 15px;

  @media (max-width: 385px) {
    min-height: 50px;
  }
`;

export const SourceContainer = styled(Col)`
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;

  > ${S4} {
    color: white;
    font-size: 12px;
    font-family: Montserrat;
    font-weight: bold;
    align-self: center;
  }

  > ${P4} {
    font-size: 15px;
    align-self: center;
    text-align: center;

    @media (max-width: 355px) {
      margin: 10px;
    }
  }

  > ${P5} {
    font-size: 13px;
    @media (max-width: 355px) {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`;

export const TargetContainer = styled(Col)`
  padding: 20px;
  align-items: center;
  padding-top: 10px;

  > ${S4} {
    color: white;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: bold;
    align-self: center;
  }

  > ${P4} {
    font-size: 15px;
    align-self: center;
    text-align: center;

    @media (max-width: 355px) {
      margin: 10px;
    }
  }

  > ${P5} {
    font-size: 13px;
    @media (max-width: 355px) {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`;
