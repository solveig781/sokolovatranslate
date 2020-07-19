import styled from 'styled-components';

import { Button } from 'components';

export const HeaderButton = styled(Button)`
  align-items: center;
  justify-content: center;

  width: 125px;
  height: 55px;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
  color: black;
  background: #f5e7cc;
  border: 1px solid #cacaca;

  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 700px) {
    width: 90px;
    height: 40px;
    padding: 10px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 10px;
  }
`;

export const HeaderButtonReversed = styled(HeaderButton)`
  background: #F5E7CC;
  1px solid #C2C2C2;
  @media (max-width: 700px) {
    width: 90px;
    height: 40px;
    padding: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
