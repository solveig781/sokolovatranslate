import React from 'react';

import { P4, P5, S4 } from 'components';
import {
  HeaderButtonContainer,
  SourceContainer,
  TargetContainer,
} from './styles';
import { HeaderButtonReversed } from '../../header-buttons';
import WhiteArrow from './whiteArrow';

function Technology() {
  return (
    <>
      <HeaderButtonContainer>
        <HeaderButtonReversed
          onClick={() => window.open('/Full_Technology_SashaSokolova.pdf')}
        >
          FULL TEXT
        </HeaderButtonReversed>
      </HeaderButtonContainer>

      <SourceContainer>
        <S4>SOURCE</S4>
        <WhiteArrow />
        <P4>Android vs iOS</P4>
        <P5>
          In today’s age of technology, every smart phone user is well
          acquainted with the terms Android and iOS. Both of these highly
          popular names are nothing, but operating systems. Android is basically
          a Linux based system software mainly designed for tablets and smart
          phones. This operating system is designed and distributed by none
          other than Google. The later one that is iOS, is an OS which is
          developed by Apple Inc. and performs well in any Apple product.
        </P5>
      </SourceContainer>
      <TargetContainer>
        <S4>TARGET</S4>
        <WhiteArrow />
        <P4>Android и iOS</P4>
        <P5>
          Сегодня каждый пользователь смартфона хорошо знаком с терминами
          "Android" и "iOS". Это названия двух популярных операционных систем.
          Android в основном представляет собой системное программное
          обеспечение на базе Linux, предназначенное для планшетов и смартфонов.
          Оно разработано и распространяется компанией Google. В свою очередь
          система iOS, разработанная позже компанией Apple Inc, отлично работает
          на любом продукте от Apple.
        </P5>
      </TargetContainer>
    </>
  );
}

export default Technology;
