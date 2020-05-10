import React from 'react';
import styled from 'styled-components';

import { Row, Col } from 'components';

const PageStyle = styled(Col)`
  background: #ffcc88;
  height: 100%;
`;

const Header = styled(Row)`
  min-height: 30px;
`;

const Boxes = styled(Col)`
  flex-grow: 1;

  margin-right: 40px;
  background: whitesmoke;
`;

const Preview = styled(Row)`
  flex-grow: 1;

  background: whitesmoke;
  border: 1px solid black;
`;

const Box = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;

  background: red;

  border: 1px solid black;
  margin: 20px;
  padding: 10px;
  max-height: 60px;
`;

const ContentContainer = styled(Row)`
  flex-grow: 1;

  margin: 40px;
`;

function WhyPickMe() {
  return (
    <PageStyle>
      <Header>How I Translate</Header>
      <ContentContainer>
        <Boxes>
          <Box>First Box</Box>
          <Box>Second Box</Box>
          <Box>Third Box</Box>
          <Box>Forth Box</Box>
          <Box>Fifth Box</Box>
          <Box>Sixth Box</Box>
        </Boxes>
        <Preview>Right Panel</Preview>
      </ContentContainer>
    </PageStyle>
  );
}

export default WhyPickMe;
