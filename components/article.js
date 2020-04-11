import React from 'react';
import styled from 'styled-components';

import { Col } from './flex';
import { H1, S1 } from './text';

const ArticleContainer = styled(Col)`
  max-width: 420px;

  @media (max-width: 480px) {
    max-width: 300px;
  }
`;

function Article({ title, subtitle, children, className }) {
  return (
    <ArticleContainer className={className}>
      <H1>{title}</H1>
      <S1>{subtitle}</S1>
      {children}
    </ArticleContainer>
  );
}

export default Article;
