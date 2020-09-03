import React from 'react';
import styled from 'styled-components';
import { Row, Col, H5, S5 } from 'components';

const Container = styled(Col)`
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
  padding: 5%;
  padding-top: 8%;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Header = styled(H5)`
  font-family: 'Press Start 2P';
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 7%;

  @media (max-width: 510px) {
    font-size: 20px;
  }

  @media (max-width: 380px) {
    font-size: 16px;
  }
`;

const Box = styled(S5)`
  font-family: 'Press Start 2P';
  color: black !important;
  min-width: 270px;

  margin-top: 4%;
  margin-bottom: 4%;

  padding: 15px;
  padding-left: 20px;
  background: #e1e1e1;
  box-shadow: 0px 4px 0px rgba(51, 0, 74, 0.77);
  border-radius: 4px;

  @media (max-width: 630px) {
    min-width: 250px;
    margin: 15px;
  }

  @media (max-width: 510px) {
    font-size: 10px;
  }

  @media (max-width: 450px) {
    width: 180px;
  }
}
`;

const BoxesCol = styled(Col)`
  position: relative;
  padding-bottom: 5%;
  align-items: flex-end;
`;

const BoxesAndImage = styled(Row)`
  position: relative;
  align-items: flex-end;
  width: 100%;
  justify-content: center;
`;
const FoxBox = styled(Row)`
  position: absolute;
  bottom: 0;
  right: 0;
  align-self: flex-end;

  > img {
    @media (max-width: 520px) {
      transform: scale(0.3, 0.3);
      position: absolute;
      bottom: -5px;
      right: 0;
    }
  }
`;

function GameMenu() {
  return (
    <Container>
      <Header>Your Awesome Game</Header>
      <BoxesAndImage>
        <BoxesCol>
          <Box>New Game/Новая игра</Box>
          <Box>Load Game/Загрузить</Box>
          <Box>Settings/Настройки</Box>
          <Box>Online/Онлайн</Box>
          <Box>Quit/Выход</Box>
        </BoxesCol>
        <FoxBox>
          <img width="115" height="105" alt="Game character" src="Fox.png" />
        </FoxBox>
      </BoxesAndImage>
    </Container>
  );
}

export default GameMenu;
