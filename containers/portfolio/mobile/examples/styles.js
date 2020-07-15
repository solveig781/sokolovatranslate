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
  @media (max-width: 320px) {
    padding-top: 0;
  }
`;

export const SourceContainer = styled(Col)`
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  @media (max-width: 320px) {
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
  }

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

    @media (max-width: 380px) {
      margin: 10px;
      font-size: 12px;
    }
    @media (max-width: 320px) {
      margin: 5px;
    }
  }

  > ${P5} {
    font-size: 13px;
    @media (max-width: 380px) {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 11px;
    }

    @media (max-width: 320px) {
      margin: 5px;
    }
  }
`;

export const TargetContainer = styled(Col)`
  padding: 20px;
  align-items: center;
  padding-top: 10px;

  @media (max-width: 320px) {
    padding-top: 0;
    padding-left: 10px;
    padding-right: 10px;
  }

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

    @media (max-width: 380px) {
      margin: 10px;
      font-size: 12px;
    }
    @media (max-width: 320px) {
      margin: 5px;
      padding-top: 0;
    }
  }

  > ${P5} {
    font-size: 13px;
    @media (max-width: 380px) {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 11px;
    }
    @media (max-width: 320px) {
      margin: 5px;
    }
  }
`;
