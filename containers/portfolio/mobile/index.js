import React, { useState } from 'react';

import BlackArrowRight from './blackArrowRight';
import BlackArrowLeft from './blackArrowLeft';

import {
  ContentContainer,
  PageStyle,
  TranslationTypeHeader,
  UnpaddedButton,
} from './styles';

import Marketing from './examples/marketing';
import Hospitality from './examples/hospitality';
import Technology from './examples/technology';
import Civil from './examples/civil';

const titles = [
  // each of the tab headers
  'MARKETING',
  'HOSPITALITY',
  'TECHNOLOGY',
  'CIVIL',
];

const tabs = [
  // each of the tab content as a function
  () => <Marketing />,
  () => <Hospitality />,
  () => <Technology />,
  () => <Civil />,
];

function MobilePortfolio() {
  const [index, setIndex] = useState(0);

  const left = () => setIndex(Math.max(0, index - 1));
  const right = () => setIndex(Math.min(titles.length - 1, index + 1));

  const TabContent = tabs[index];
  const titleContent = titles[index];

  return (
    <PageStyle>
      <TranslationTypeHeader>
        <UnpaddedButton onClick={left}>
          {index !== 0 && <BlackArrowLeft />}
        </UnpaddedButton>
        {titleContent}
        <UnpaddedButton onClick={right}>
          {index !== titles.length - 1 && <BlackArrowRight />}
        </UnpaddedButton>
      </TranslationTypeHeader>

      <ContentContainer>
        {TabContent && <TabContent />}
        {!TabContent && <span>Nothing here</span>}
      </ContentContainer>
    </PageStyle>
  );
}

export default MobilePortfolio;
