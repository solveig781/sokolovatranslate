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
          <H1>Hi my name is Sasha</H1>
          <S1>Bla bla bla</S1>
        </NameHeadline>
        <NameFootline>
          <S1>Bla bla bla</S1>
          <H1>ASD ASD ASD ASD</H1>
        </NameFootline>
      </NameColumn>
    </StyledHomePage>
  );
}

export default HomePage;
