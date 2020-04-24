import React from 'react';
import styled from 'styled-components';

import { Row } from 'components';

const PageStyle = styled(Row)`
  background: #ffcc88;
  height: 100%;
  align-items: center;
`;

const Boxes = styled(Row)`
  background: whitesmoke;
  width: 50%;
  height: 80%;
  flex-wrap: wrap;
  align-itmes: ;
`;
const Preview = styled(Row)`
  background: whitesmoke;
  width: 50%;
  height: 80%;
  flex-wrap: wrap;
  align-itmes: ;
  border: 1px solid black;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: red;
  width: 30%;
  border: 1px solid black;
  margin: 20px;
  padding: 10px;
  max-height: 60px;
`;

function WhyPickMe() {
  return (
    <PageStyle>
      <Boxes>
        <Box>First Box</Box>
        <Box>Second Box</Box>
        <Box>Third Box</Box>
        <Box>Forth Box</Box>
        <Box>Fifth Box</Box>
        <Box>Sixth Box</Box>
      </Boxes>
      <Preview>Right Panel</Preview>
    </PageStyle>
  );
}

export default WhyPickMe;
