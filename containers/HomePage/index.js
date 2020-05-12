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
    min-width: 180px;
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

function HomePage() {
  return (
    <StyledHomePage>
      <StyledButtonRow>
        <Button>How I transalte</Button>
        <Button>Full Examples</Button>
        <Button>Contact Me</Button>
        <ResumeButton>CV</ResumeButton>
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
