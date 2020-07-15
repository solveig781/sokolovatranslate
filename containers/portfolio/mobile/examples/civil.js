import React from 'react';

import { P4, P5, S4 } from 'components';
import {
  HeaderButtonContainer,
  SourceContainer,
  TargetContainer,
} from './styles';
import { HeaderButton, HeaderButtonReversed } from '../../header-buttons';
import WhiteArrow from './whiteArrow';

function Civil() {
  return (
    <>
      <HeaderButtonContainer>
        <HeaderButton
          onClick={() => window.open('/SashaSokolova_Diploma_Original.pdf')}
        >
          ORIGINAL
        </HeaderButton>
        <HeaderButtonReversed
          onClick={() =>
            window.open('/Bachelor_Diploma_AleksandraSokolova.pdf')
          }
        >
          TRANSLATED
        </HeaderButtonReversed>
      </HeaderButtonContainer>

      <SourceContainer>
        <S4>SOURCE</S4>
        <WhiteArrow />
        <P4>My Bachelor's Diploma</P4>
        <P5>
          I translate all types of civil documentation: birth/marriage
          certificates, reports, apostilles, higher education diplomas, etc.
        </P5>
        <P5>
          However, any demonstration of such work would be a confidentiality
          violation. I’m using my higher education diploma, which I translated
          from Russian to English myself as an example of such work.
        </P5>
      </SourceContainer>
      <TargetContainer>
        <S4>TARGET</S4>
        <WhiteArrow />
        <P4>Мой диплом бакалавра</P4>
        <P5>
          Я перевожу различные документы: свидетельства о рождении, браке,
          заявления, апостили, дипломы и сертификаты о высшем образовании и т.д.
        </P5>
        <P5>
          Однако демонстрация примеров такой работы была бы разглашением
          конфиденциальных данных клиентов. Поэтому я использую свой диплом о
          высшем образовании, который я перевела самостоятельно с русского на
          английский, в качестве примера.
        </P5>
      </TargetContainer>
    </>
  );
}

export default Civil;
