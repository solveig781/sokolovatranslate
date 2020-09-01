import React from 'react';
import styled from 'styled-components';
import { Row, Col, H5, S5 } from 'components';

const Container = styled(Col)`
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
  padding: 10%;

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

  margin: 2%;
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

function GameMenu() {
  return (
    <Container>
      <Header>Your Awesome Game</Header>
      <Box>New Game/Новая игра</Box>
      <Box>Load Game/Загрузить</Box>
      <Box>Settings/Настройки</Box>
      <Box>Online/Онлайн</Box>
      <Box>Quit/Выход</Box>
    </Container>
  );
}

export default GameMenu;
