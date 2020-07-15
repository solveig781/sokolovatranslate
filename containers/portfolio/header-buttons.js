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
  background: linear-gradient(
      240.64deg,
      rgba(255, 255, 255, 0.65) 0%,
      rgba(255, 255, 255, 0) 61.27%
    ),
    #cbffe1;
  border: 1px solid #000000;

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
  background: linear-gradient(
      120.61deg,
      rgba(255, 255, 255, 0.65) 0%,
      rgba(255, 255, 255, 0) 61.37%
    ),
    #cbffe1;
  @media (max-width: 700px) {
    width: 90px;
    height: 40px;
    padding: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
