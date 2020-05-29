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

function whiteWhenActive({ active }) {
  if (active) {
    return 'color: black; background: white;';
  }

  return '';
}

const Box = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  ${whiteWhenActive}
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
          <Box
            active={selectedExample === 'marketing'}
            onClick={() => setSelectedExample('marketing')}
          >
            MARKETING
          </Box>
          <Box
            active={selectedExample === 'general'}
            onClick={() => setSelectedExample('general')}
          >
            GENERAL
          </Box>
          <Box
            active={selectedExample === 'civil'}
            onClick={() => setSelectedExample('civil')}
          >
            CIVIL
          </Box>
          <Box
            active={selectedExample === 'websites'}
            onClick={() => setSelectedExample('websites')}
          >
            WEBSITES
          </Box>
        </Boxes>
        <Example selectedExample={selectedExample} />
      </ContentContainer>
    </PageStyle>
  );
}

export default WhyPickMe;
