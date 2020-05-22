/* global window */

import React from 'react';
import styled from 'styled-components';

import { Col, Row, H1, S1, Button } from 'components';

import LighteningIcon from './lightening';

const StyledLightening = styled(Row)`
  justify-content: center;
`;

const StyledButtonRow = styled(Row)`
  width: 100%;
  justify-content: flex-start;

  > ${Button} {
    width: 180px;
    max-height: 100px;
  }
`;

const ResumeButton = styled(Button)`
  margin-left: auto;
`;

const StyledHomePage = styled(Col)`
  width: 100%;
  height: 100%;
  background: #7bb3e8;
`;

const NameColumn = styled(Col)`
  height: 100%;
`;

const NameHeadline = styled(Col)`
  margin: 40px;

  ${H1} {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 42px;
    font-family: Comfortaa;
    font-size: 35px;
    line-height: 33px;
    letter-spacing: 0.1em;
  }
  ${S1} {
    color: #eef5d8;
    font-size: 30px;
    font-family: Montserrat, sans-serif;
    margin-right: 40px;
    margin-left: 40px;
  }
`;

// Copy styles from NameHeadline plz
const NameFootline = styled(NameHeadline)`
  align-self: flex-end;
  text-align: end;
`;

// scrollToPage(1) =>
// page = 1

// scrollToPage(2) =>
// page = 2
function scrollToPage(numberOfPages) {
  window.scrollTo({
    top: window.innerHeight * numberOfPages,
    left: 0,
    behavior: 'smooth',
  });
}

function FUNCTION_NAME(PARAMETER, PARAMETER2) {
  // CODE
  // some_other_function()
}

function scrollToContact() {
  scrollToPage(2);
}

function openResume() {
  window.open('Resume_Aleksandra Sokolova.pdf', '_blank');
}
function scrollToPortfolio() {
  scrollToPage(1);
}

function HomePage() {
  return (
    <StyledHomePage>
      <StyledButtonRow>
        <Button onClick={scrollToPortfolio}>Portfolio</Button>
        <Button onClick={scrollToContact}>Contact Me</Button>
        <ResumeButton onClick={openResume}>MY CV</ResumeButton>
      </StyledButtonRow>
      <NameColumn>
        <NameHeadline>
          <H1>ENGLISH - RUSSIAN TRANSLATION</H1>
          <S1>Sasha Sokolova</S1>
        </NameHeadline>

        <StyledLightening>
          <LighteningIcon />
        </StyledLightening>
        <NameFootline>
          <S1>Саша Соколова</S1>
          <H1>ПЕРЕВОД С АНГЛИЙСКОГО НА РУССКИЙ</H1>
        </NameFootline>
      </NameColumn>
    </StyledHomePage>
  );
}

export default HomePage;
