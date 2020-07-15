import React from 'react';

import { P4, P5, S4 } from 'components';
import {
  HeaderButtonContainer,
  SourceContainer,
  TargetContainer,
} from './styles';
import { HeaderButtonReversed } from '../../header-buttons';
import WhiteArrow from './whiteArrow';

function Hospitality() {
  return (
    <>
      <HeaderButtonContainer>
        <HeaderButtonReversed
          onClick={() => window.open('/Full_Hospitality_SashaSokolova.pdf')}
        >
          FULL TEXT
        </HeaderButtonReversed>
      </HeaderButtonContainer>

      <SourceContainer>
        <S4>SOURCE</S4>
        <WhiteArrow />
        <P4>The famous Harry’s Bar sets up in Cannes</P4>
        <P5>
          It’s official! From June 2020, Cannes will be the city hosting a new
          Harry’s Bar (the oldest cocktail bar in Europe). Harry’s Bar in Cannes
          will be installed in the very heart of the Port Canto, renovated and
          modernized by David Lisnard, Mayor of Cannes, in the extension of the
          overall embellishment of the Croisette.
        </P5>
      </SourceContainer>
      <TargetContainer>
        <S4>TARGET</S4>
        <WhiteArrow />
        <P4>Знаменитый Harry’s Bar откроется в Каннах</P4>
        <P5>
          Жаркие новости! В июне 2020 года в Каннах откроется новый Harry's Bar
          (Harry's Bar в Венеции — старейший коктейль-бар в Европе). Harry's Bar
          в Каннах будет находиться в самом сердце Порт-Канто, добавив еще
          больше шарма набережной Круазет. Мэр Канн Давид Лиснар (David Lisnard)
          поручил отремонтировать и модернизировать здание к открытию.
        </P5>
      </TargetContainer>
    </>
  );
}

export default Hospitality;
