/* global window */

import React from 'react';
import styled from 'styled-components';

import { Col, Row, H1, S1, Button } from 'components';

import LighteningIcon from './lightening';

const StyledLightening = styled(Row)`
  justify-content: center;
  @media (max-width: 700px) {
    width: 300px;
    align-self: center;
  }
`;

const StyledButtonRow = styled(Row)`
  width: 100%;
  justify-content: flex-start;

  @media (max-width: 700px) {
    justify-content: space-between;
  }

  > ${Button} {
    width: 180px;
    max-height: 100px;

    @media (max-width: 700px) {
      padding: 20px;
      width: 120px;
      height: 120px;
      font-size: 12px;
      text-align: center;
    }
  }
`;

const ResumeButton = styled(Button)`
  margin-left: auto;
  @media (max-width: 700px) {
    max-width: 120px;
    margin: 0px;
  }
`;

const StyledHomePage = styled(Col)`
  width: 100%;
  height: 100%;
  background: #7bb3e8;
`;

const NameColumn = styled(Col)`
  height: 100%;
  justify-content: center;
`;

const NameHeadline = styled(Col)`
  margin: 40px;

  ${H1} {
    margin-top: 20px;
    margin-bottom: 20px;

    font-family: Comfortaa, sans-serif;
    font-size: 35px;
    line-height: 33px;
    letter-spacing: 0.1em;
    font-weight: light;
    color: #3f3f3f;
    @media (max-width: 700px) {
      font-size: 20px;
    }
  }

  ${S1} {
    color: #eef5d8;
    font-size: 30px;
    font-family: Montserrat, sans-serif;
    margin-right: 40px;
    margin-left: 40px;

    @media (max-width: 700px) {
      font-size: 17px;
      margin-right: 20px;
      margin-left: 20px;
    }
  }

  @media (max-width: 700px) {
    margin-top: 10px;
  }
`;

// Copy styles from NameHeadline plz
const NameFootline = styled(NameHeadline)`
  align-self: flex-end;
  text-align: end;
  @media (max-width: 700px) {
    margin-top: 0px;
  }
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

function scrollToContact() {
  scrollToPage(2);
}

function openResume() {
  window.open('Resume_Sasha_Sokolova.pdf', '_blank');
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
          <H1>ENGLISH — RUSSIAN TRANSLATION</H1>
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
