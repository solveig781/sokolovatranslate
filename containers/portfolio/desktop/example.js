/* global window */

import React from 'react';
import styled from 'styled-components';
import { P4, P5, Col, Row } from 'components';

import ALL_EXAMPLES from './examples';
import { HeaderButton, HeaderButtonReversed } from '../header-buttons';

const LanguageContainer = styled(Col)`
  flex-grow: 1;
  width: 50%;
  position: relative;

  span {
    padding: 15px;
    text-align: center;
    background: #efefef;
  }

  p {
    overflow-wrap: break-word;
    text-align: left;

    padding-left: 8px;
    padding-right: 8px;
  }

  > ${P4} {
    margin-top: 40px;
    text-align: center;
  }

  > ${P5} {
    padding-left: 40px;
    padding-right: 40px;
    text-align: justify;
    font-size: 14px;
  }

  @media (max-width: 700px) {
    background: none;
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

const PreviewContainer = styled(Row)`
  flex-grow: 1;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 20px;

  @media (max-width: 700px) {
    background: none;
  }
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

        {selectedContent && selectedContent.original && (
          <HeaderButton onClick={() => window.open(selectedContent.original)}>
            ORIGINAL
          </HeaderButton>
        )}

        {selectedContent && selectedContent.translated && (
          <HeaderButtonReversed
            onClick={() => window.open(selectedContent.translated)}
          >
            Translated
          </HeaderButtonReversed>
        )}
      </HeaderButtonContainer>
      <LanguageContainer>
        <span>Source {selectedContent.labelSource || ''}</span>

        {selectedContent && selectedContent.english}
      </LanguageContainer>

      <LanguageContainer>
        <span>Target {selectedContent.labelTarget || ''}</span>
        {selectedContent && selectedContent.russian}
      </LanguageContainer>
    </PreviewContainer>
  );
}

export default Example;
