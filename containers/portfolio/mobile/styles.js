import styled from 'styled-components';

import { Col, Button, Row, P5 } from 'components';

export const PageStyle = styled(Col)`
  background: #7bb3e8;
  height: 100%;
`;

export const UnpaddedButton = styled(Button)`
  padding: 0;
  margin-right: 10px;
  margin-left: 10px;
  max-width: 20px;
  max-height: 60px;
  border-bottom: none;
`;

export const TranslationTypeHeader = styled(Row)`
  width: 100%;
  height: 45px;
  background: white;
  justify-content: space-between;
  align-items: center;
`;

export const ContentContainer = styled(Col)`
  text-align: justify;
  padding: 20px;
  padding-top: 10px;

  @media (max-width: 385px) {
    padding: 10px;
  }
`;
