import React from 'react';

import { P4, P5, S4 } from 'components';
import {
  HeaderButtonContainer,
  SourceContainer,
  TargetContainer,
} from './styles';
import { HeaderButton, HeaderButtonReversed } from '../../header-buttons';
import WhiteArrow from './whiteArrow';

function Marketing() {
  return (
    <>
      <HeaderButtonContainer>
        <HeaderButton
          onClick={() =>
            window.open(
              'https://beseed.ru/blog/5-%D1%82%D1%80%D0%B5%D0%BD%D0%B4%D0%BE%D0%B2-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3%D0%B0-%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%8B%D0%BC-%D1%81%D1%82%D0%BE/',
            )
          }
        >
          PUBLICATION
        </HeaderButton>
        <HeaderButtonReversed
          onClick={() => window.open('/Full_VideoMarketing_SashaSokolova.pdf')}
        >
          FULL TEXT
        </HeaderButtonReversed>
      </HeaderButtonContainer>

      <SourceContainer>
        <S4>SOURCE</S4>
        <WhiteArrow />
        <P4>5 Video Marketing Trends You Should Follow in 2019</P4>
        <P5>
          Got your 360-degree marketing video ready to go? What about that
          virtual reality how-to? Time to get ready for the future.
        </P5>
        <P5>
          Many consumers devote (what seems like) 24/7 of their time to holding
          a mobile device in one hand and dealing, with the other, with a
          million different companies vying for their attention on the web.
        </P5>
      </SourceContainer>
      <TargetContainer>
        <S4>TARGET</S4>
        <WhiteArrow />
        <P4>5 трендов видеомаркетинга, которым стоит следовать в 2019 году</P4>
        <P5>
          Уже смонтировали свое видео в 360 градусов? А обучающий ролик в
          виртуальной реальности? Пора готовиться к будущему!
        </P5>
        <P5>
          Многие люди проводят 24 часа в сутки 7 дней в неделю с телефоном в
          руках. И в это время (то есть, всегда) компании со всего мира борются
          за внимание пользователей. Если ваша компания тоже пытается пробиться
          через клаттер и выделиться на общем фоне, – поздравляем, вам не
          обойтись без видеомаркетинга!
        </P5>
      </TargetContainer>
    </>
  );
}

export default Marketing;
