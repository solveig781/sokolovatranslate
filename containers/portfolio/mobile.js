import React from 'react';
import styled from 'styled-components';

import { Row, Col, S4, P4, P5, Button } from 'components';
import { HeaderButton, HeaderButtonReversed } from './header-buttons';
import WhiteArrow from './whiteArrow';
import BlackArrowRight from './blackArrowRight';
import BlackArrowLeft from './blackArrowLeft';

const PageStyle = styled(Col)`
  background: #7bb3e8;
  height: 100%;
`;

const UnpaddedButton = styled(Button)`
  padding: 0;
  margin-right: 10px;
  margin-left: 10px;
  max-width: 20px;
  max-height: 60px;
  border-bottom: none;
`;

const TranslationTypeHeader = styled(Row)`
  width: 100%;
  height: 45px;
  background: white;
  justify-content: space-between;
  align-items: center;
`;

const HeaderButtonContainer = styled(Row)`
  left: 0;
  z-index: 10;

  width: 100%;
  min-height: 80px;

  justify-content: center;
  align-items: center;
  padding-top: 15px;

  @media (max-width: 385px) {
    min-height: 50px;
  }
`;

const ContentContainer = styled(Col)`
  text-align: justify;
  padding: 20px;
  padding-top: 10px;

  @media (max-width: 385px) {
    padding: 10px;
  }
`;

const SourceConteiner = styled(Col)`
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;

  > ${S4} {
    color: white;
    font-size: 12px;
    font-family: Montserrat;
    font-weight: bold;
    align-self: center;
  }

  > ${P4} {
    font-size: 15px;
    align-self: center;
    text-align: center;

    @media (max-width: 355px) {
      margin: 10px;
    }
  }

  > ${P5} {
    font-size: 13px;
    @media (max-width: 355px) {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`;
const TargetConteiner = styled(Col)`
  padding: 20px;
  align-items: center;
  padding-top: 10px;

  > ${S4} {
    color: white;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: bold;
    align-self: center;
  }

  > ${P4} {
    font-size: 15px;
    align-self: center;
    text-align: center;

    @media (max-width: 355px) {
      margin: 10px;
    }
  }

  > ${P5} {
    font-size: 13px;
    @media (max-width: 355px) {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`;

function MobilePortfolio() {
  return (
    <PageStyle>
      <TranslationTypeHeader>
        <UnpaddedButton>
          <BlackArrowLeft />
        </UnpaddedButton>
        TRANSLATION TYPE
        <UnpaddedButton>
          <BlackArrowRight />
        </UnpaddedButton>
      </TranslationTypeHeader>

      <HeaderButtonContainer>
        <HeaderButton>PUBLICATION</HeaderButton>
        <HeaderButtonReversed>FULL TEXT</HeaderButtonReversed>
      </HeaderButtonContainer>
      <ContentContainer>
        <SourceConteiner>
          <S4>SOURCE</S4>
          <WhiteArrow />
          <P4>5 Video Marketing Trends You Should Follow in 2019</P4>
          <P5>
            Got your 360-degree marketing video ready to go? What about that
            virtual reality how-to? Time to get ready for the future.
          </P5>
          <P5>
            Many consumers devote (what seems like) 24/7 of their time to
            holding a mobile device in one hand and dealing, with the other,
            with a million different companies vying for their attention on the
            web.
          </P5>
        </SourceConteiner>
        <TargetConteiner>
          <S4>TARGET</S4>
          <WhiteArrow />
          <P4>
            5 трендов видеомаркетинга, которым стоит следовать в 2019 году
          </P4>
          <P5>
            Уже смонтировали свое видео в 360 градусов? А обучающий ролик в
            виртуальной реальности? Пора готовиться к будущему!
          </P5>
          <P5>
            Многие люди проводят 24 часа в сутки 7 дней в неделю с телефоном в
            руках. И в это время (то есть, всегда) компании со всего мира
            борются за внимание пользователей. Если ваша компания тоже пытается
            пробиться через клаттер и выделиться на общем фоне, – поздравляем,
            вам не обойтись без видеомаркетинга!
          </P5>
        </TargetConteiner>
      </ContentContainer>
    </PageStyle>
  );
}

export default MobilePortfolio;
