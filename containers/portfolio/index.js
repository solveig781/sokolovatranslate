import React from 'react';
import styled from 'styled-components';

import { Row, Col, S1, Button } from 'components';

import ArrowIcon from './arrow';

const PageStyle = styled(Col)`
  background: #7bb3e8;
  height: 100%;
`;

const Header = styled(Row)`
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
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Boxes = styled(Col)`
  flex-grow: 1;
  max-width: 350px;
  margin-right: 40px;
`;

const PreviewContainer = styled(Row)`
  background: #f9f2ec;
  max-width: 900px;
  border-radius: 8px;
`;

const LanguageContainer = styled(Col)`
  border-right: 0.8px solid grey;
  border-left: 0.8px solid grey;

  span {
    padding: 20px;
    text-align: center;
    background-color: lightgrey;
  }

  p {
    overflow-wrap: break-word;
    text-align: center;
  }
`;

const Box = styled(Button)`
  display: flex;
  align-items: start;
  justify-content: start;

  border-bottom: 1px solid #cbffe1;
  color: black;
  margin: 20px;
  padding: 10px;
  max-height: 100px;
`;

const ContentContainer = styled(Row)`
  flex-grow: 1;

  justify-content: space-between;
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
          <Box>TRAVEL/TOURISM</Box>
          <Box>PR</Box>
          <Box>MARKETING</Box>
          <Box>WEBSITES/WEB CONTENT</Box>
          <Box>GENERAL</Box>
          <Box>CIVIL DOCUMENTS</Box>
        </Boxes>
        <PreviewContainer>
          <LanguageContainer>
            <span>Source - English</span>
            <p>
              Dhhg;ihgkjdnfg;se rgh;ojfgn;skdjg;sehg;kdjsfng
              ;kjrbkjfdn;aireo;giahei ;tuharoijwf.kzv, mzbdliur
            </p>
          </LanguageContainer>
          <LanguageContainer>
            <span>Target - Russian</span>
            <p>
              Dhhg;ihgkjdnfg;se rgh;ojfgn;skdjg;sehg;kdjsfng
              ;kjrbkjfdn;aireo;giahei ;tuharoijwf.kzv, mzbdliur
            </p>
          </LanguageContainer>
        </PreviewContainer>
      </ContentContainer>
    </PageStyle>
  );
}

export default WhyPickMe;
