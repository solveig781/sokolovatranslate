import React from 'react';
import { P5, P4 } from 'components';

export default {
  labelSource: 'Russian',
  labelTarget: 'English',
  original: '/SashaSokolova_Diploma_Original.pdf',
  translated: '/Bachelor Diploma_Aleksandra Sokolova.pdf',
  english: (
    <>
      <P4>My Bachelor's Diploma</P4>
      <P5>
        I translate all types of civil documentation: birth/marriage
        certificates, reports, apostilles, high education diplomas, etc.
      </P5>
      <P5>
        However, any demonstration of suh work would be a confidentiality
        violation of the clients, I’m using my high education diploma, which I
        translated from Russian to English myself as an example of such work.
      </P5>
    </>
  ),
  russian: (
    <>
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
    </>
  ),
};
/* 1.Delete "English source Russian target" text from spans
  2. Paste piece of my diploma screenshot filling the container entirely
  3. Chanhce button texts for "Original document", "translated"
  4. Upload original diploma to open on 1st button click
*/
