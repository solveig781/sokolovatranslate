import React from 'react';
import styled from 'styled-components';

import { Col, Row, H1, S1, Button } from 'components';

const StyledButtonRow = styled(Row)`
  width: 100%;
  justify-content: flex-start;
`;

const ResumeButton = styled(Button)`
  margin-left: auto;
`;

const StyledHomePage = styled(Col)`
  width: 100%;
  height: 100%;
`;

const NameColumn = styled(Col)`
  height: 100%;
  justify-content: space-between;
`;

const NameHeadline = styled(Col)`
  margin: 40px;

  ${H1} {
    margin-top: 8px;
    margin-bottom: 8px;
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
        <ResumeButton>Resume</ResumeButton>
      </StyledButtonRow>
      <NameColumn>
        <NameHeadline>
          <H1>ENGLISH - RUSSIAN TRANSLATION</H1>
          <S1>Aleksandra Sokolova</S1>
        </NameHeadline>
        <NameFootline>
          <S1>Александра Соколова</S1>
          <H1>ПЕРЕВОД С АНГЛИЙСКОГО НА РУССКИЙ</H1>
        </NameFootline>
      </NameColumn>
    </StyledHomePage>
  );
}

export default HomePage;
