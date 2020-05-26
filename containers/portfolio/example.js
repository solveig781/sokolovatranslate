/* global window */

import React from 'react';
import styled from 'styled-components';
import { P4, Col, Row, Button } from 'components';

import prExample from './examples/pr';
import marketingExample from './examples/marketing';
import websitesExample from './examples/websites';

const ALL_EXAMPLES = {
  marketing: marketingExample,
  pr: prExample,
  websites: websitesExample,
};

const LanguageContainer = styled(Col)`
  flex-grow: 1;
  width: 50%;
  position: relative;

  span {
    padding: 20px;
    text-align: center;
    background: #dbdbdb;
    border-radius: 8px;
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
`;

const PublicationButton = styled(Button)`
  align-items: center;
  justify-content: center;
  width: 180px;
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
  left: 86%;
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
        {selectedContent && (
          <PublicationButton
            onClick={() => window.open(selectedContent.publication)}
          >
            PUBLICATION
          </PublicationButton>
        )}
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
