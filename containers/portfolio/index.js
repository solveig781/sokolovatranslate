import React, { useState } from 'react';
import styled from 'styled-components';

import { Row, Col, Button } from 'components';

import Example from './example';

const PageStyle = styled(Col)`
  background: #7bb3e8;
  height: 100%;
`;

/*
const Header = styled(Row)`
  align-items: center;
  margin-top: 60px;
  margin-left: 40px;
  justify-content: space-between;
 
  color: white;
  font-family: Montserrat, sans-serif;
`;
*/

const Boxes = styled(Row)`
  width: 100%;
  justify-content: flex-end;

  > ${Button} {
      width: 180px;
      max-height: 100px;
      
    }
  }
`;
const Box = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ;
`;

const HomeButton = styled(Button)`
  border: 1px solid white;
  margin-right: auto;
`;

const ContentContainer = styled(Col)`
  flex-grow: 1;
  justify-content: flex-start;
  font-family: 'Montserrat', sans-serif;
`;

function scrollToPage(numberOfPages) {
  window.scrollTo({
    top: window.innerHeight * numberOfPages,
    left: 0,
    behavior: 'smooth',
  });
}
function scrollToHome() {
  scrollToPage(0);
}

function WhyPickMe() {
  const [selectedExample, setSelectedExample] = useState('marketing');

  return (
    <PageStyle>
      <ContentContainer>
        <Boxes>
          <HomeButton onClick={scrollToHome}>Home</HomeButton>
          <Box onClick={() => setSelectedExample('hospitality')}>
            HOSPITALITY
          </Box>
          <Box onClick={() => setSelectedExample('pr')}>PR</Box>
          <Box onClick={() => setSelectedExample('marketing')}>MARKETING</Box>
          <Box onClick={() => setSelectedExample('websites')}>WEBSITES</Box>
          <Box onClick={() => setSelectedExample('general')}>GENERAL</Box>
          <Box onClick={() => setSelectedExample('civil')}>CIVIL</Box>
        </Boxes>
        <Example selectedExample={selectedExample} />
      </ContentContainer>
    </PageStyle>
  );
}

export default WhyPickMe;