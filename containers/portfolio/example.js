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

const PublicationButton = styled(Button)`
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 60px;
  padding: 10px;
  background: linear-gradient(
      282.96deg,
      #e05757 10.14%,
      rgba(240, 139, 139, 0) 76.06%
    ),
    #f4976c;
  border-bottom: none;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  position: absolute;
  left: 79%;
  z-index: 10;
`;
const FullTextButton = styled(Button)`
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 60px;
  padding: 10px;

  background: linear-gradient(
      250.19deg,
      rgba(240, 139, 139, 0) 23.39%,
      #e05757 79.94%
    ),
    #f4976c;

  border-bottom: none;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  position: absolute;
  right: 79%;
  z-index: 10;
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
      <LanguageContainer>
        <span>Source: English</span>
        {selectedContent && selectedContent.publication && (
          <PublicationButton
            onClick={() => window.open(selectedContent.publication)}
          >
            PUBLICATION
          </PublicationButton>
        )}

        {selectedContent && selectedContent.english}
      </LanguageContainer>

      <LanguageContainer>
        {selectedContent && selectedContent.fulltext && (
          <FullTextButton onClick={() => window.open(selectedContent.fulltext)}>
            FULL TEXT
          </FullTextButton>
        )}

        <span>Target: Russian</span>
        {selectedContent && selectedContent.russian}
      </LanguageContainer>
    </PreviewContainer>
  );
}

export default Example;
