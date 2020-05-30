/* global window */

import React from 'react';
import styled from 'styled-components';
import { P4, P5, Col, Row, Button } from 'components';

import ALL_EXAMPLES from './examples';

const LanguageContainer = styled(Col)`
  flex-grow: 1;
  width: 50%;
  position: relative;

  span {
    padding: 20px;
    text-align: center;
    background: #dbdbdb;
  }

  p {
    overflow-wrap: break-word;
    text-align: left;

    padding-left: 8px;
    padding-right: 8px;
  }
  > ${P4} {
    text-align: center;
  }
  > ${P5} {
    padding-left: 40px;
    padding-right: 40px;
    text-align: justify;
    font-size: 14px;
  }
`;

const HeaderButtonContainer = styled(Row)`
  position: absolute;
  left: 0;
  z-index: 10;

  width: 100%;
  min-height: 80px;

  justify-content: center;
`;

const HeaderButton = styled(Button)`
  align-items: center;
  justify-content: center;

  width: 130px;
  height: 60px;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;

  background: linear-gradient(
      282.96deg,
      #e05757 10.14%,
      rgba(240, 139, 139, 0) 76.06%
    ),
    #f4976c;

  border-bottom: none;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const HeaderButtonReversed = styled(HeaderButton)`
  background: linear-gradient(
      250.19deg,
      rgba(240, 139, 139, 0) 23.39%,
      #e05757 79.94%
    ),
    #f4976c;
`;

const PreviewContainer = styled(Row)`
  flex-grow: 1;
  background: #f9f2ec;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 20px;
`;

function Example({ selectedExample }) {
  const selectedContent = ALL_EXAMPLES[selectedExample];

  return (
    <PreviewContainer>
      <HeaderButtonContainer>
        {selectedContent && selectedContent.publication && (
          <HeaderButton
            onClick={() => window.open(selectedContent.publication)}
          >
            PUBLICATION
          </HeaderButton>
        )}
        {selectedContent && selectedContent.fulltext && (
          <HeaderButtonReversed
            onClick={() => window.open(selectedContent.fulltext)}
          >
            FULL TEXT
          </HeaderButtonReversed>
        )}
      </HeaderButtonContainer>
      <LanguageContainer>
        <span>Source: English</span>

        {selectedContent && selectedContent.english}
      </LanguageContainer>

      <LanguageContainer>
        <span>Target: Russian</span>
        {selectedContent && selectedContent.russian}
      </LanguageContainer>
    </PreviewContainer>
  );
}

export default Example;
