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
`;

const NameHeadline = styled(Col)`
  margin: 40px;

  ${H1} {
    padding-bottom: 8px;
  }
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
      <NameHeadline>
        <H1>ASD ASD ASD ASD</H1>
        <S1>Bla bla bla</S1>
      </NameHeadline>
    </StyledHomePage>
  );
}

export default HomePage;
