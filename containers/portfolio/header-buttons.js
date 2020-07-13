import styled from 'styled-components';

import { Button } from 'components';

export const HeaderButton = styled(Button)`
  align-items: center;
  justify-content: center;

  width: 130px;
  height: 60px;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;

  background: linear-gradient(
      282.96deg,
      #e05757 10.14%,
      rgba(240, 139, 139, 0) 76.06%
    ),
    #f4976c;

  border-bottom: none;
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
      250.19deg,
      rgba(240, 139, 139, 0) 23.39%,
      #e05757 79.94%
    ),
    #f4976c;
  @media (max-width: 700px) {
    width: 90px;
    height: 40px;
    padding: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
