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
  display: flex;
  justify-content: center;
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
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 42px;
  }
  ${S1} {
    color: #eef5d8;
    font-size: 30px;
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
          <S1>Aleksandra Sokolova</S1>
        </NameHeadline>

        <StyledLightening>
          <LighteningIcon />
        </StyledLightening>
        <NameFootline>
          <S1>Александра Соколова</S1>
          <H1>ПЕРЕВОД С АНГЛИЙСКОГО НА РУССКИЙ</H1>
        </NameFootline>
      </NameColumn>
    </StyledHomePage>
  );
}

export default HomePage;
