import React from 'react';
import styled from 'styled-components';

import { Row, Col } from 'components';

const PageStyle = styled(Col)`
  background: #ffcc88;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled(Row)`
  min-height: 30px;
`;

const Boxes = styled(Col)`
  background: whitesmoke;
  width: 30%;
`;

const Preview = styled(Row)`
  background: whitesmoke;
  width: 55%;
  height: 70%;
  margin-right: 3%;
  flex-wrap: wrap;
  align-itmes: ;
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

function WhyPickMe() {
  return (
    <PageStyle>
      <Header>How I Translate</Header>
      <Row>
        <Boxes>
          <Box>First Box</Box>
          <Box>Second Box</Box>
          <Box>Third Box</Box>
          <Box>Forth Box</Box>
          <Box>Fifth Box</Box>
          <Box>Sixth Box</Box>
        </Boxes>
        <Preview>Right Panel</Preview>
      </Row>
    </PageStyle>
  );
}

export default WhyPickMe;
