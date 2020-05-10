import React from 'react';
import styled from 'styled-components';

import { Row, Col, S1, Button } from 'components';

import ArrowIcon from './arrow';

const PageStyle = styled(Col)`
  background: #7bb3e8;
  height: 100%;
`;

const Header = styled(Row)`
  background: lightblue;

  align-items: center;
  margin-top: 40px;
  margin-left: 40px;

  justify-content: space-between;

  border-bottom: 1px solid black;
`;

const AllExamplesButton = styled(Button)`
  align-items: center;

  width: 180px;
  margin-right: 40px;
  text-transform: none;
  padding: 10px;
  position: relative;
  top: 16px;
  background: #f4976c;
  border-bottom: none;
  color: black;
`;

const Boxes = styled(Col)`
  flex-grow: 1;
  max-width: 350px;
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
  background: orange;

  margin: 40px;
`;

function WhyPickMe() {
  return (
    <PageStyle>
      <Header>
        <S1>How I Translate</S1>
        <AllExamplesButton>
          <span>all examples</span> <ArrowIcon />
        </AllExamplesButton>
      </Header>
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
