import React from 'react';
import styled from 'styled-components';

import { Row, Col, S1, P5, P4, Button } from 'components';

const PageStyle = styled(Col)`
  background: #7bb3e8;
  height: 100%;
`;

/*
const Header = styled(Row)`
  align-items: center;
  margin-top: 60px;
  margin-left: 40px;
  justify-content: space-between;
 
  color: white;
  font-family: Montserrat, sans-serif;
`;
*/

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

const Boxes = styled(Row)`
  width: 100%;
  justify-content: flex-end;

  > ${Button} {
      width: 180px;
      max-height: 100px;
      
    }
  }
`;
const Box = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ;
`;

const HomeButton = styled(Button)`
  border: 1px solid white;
  margin-right: auto;
`;
const PreviewContainer = styled(Row)`
  flex-grow: 1;
  background: #f9f2ec;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 20px;
`;

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

const ContentContainer = styled(Col)`
  flex-grow: 1;
  justify-content: flex-start;
  font-family: 'Montserrat', sans-serif;
`;

function scrollToPage(numberOfPages) {
  window.scrollTo({
    top: window.innerHeight * numberOfPages,
    left: 0,
    behavior: 'smooth',
  });
}
function scrollToHome() {
  scrollToPage(0);
}

function WhyPickMe() {
  return (
    <PageStyle>
      <ContentContainer>
        <Boxes>
          <HomeButton onClick={scrollToHome}>Home</HomeButton>
          <Box>HOSPITALITY</Box>
          <Box>PR</Box>
          <Box>MARKETING</Box>
          <Box>WEBSITES</Box>
          <Box>GENERAL</Box>
          <Box>CIVIL</Box>
        </Boxes>
        <PreviewContainer>
          <LanguageContainer>
            <span>Source: English</span>
            <PublicationButton>PUBLICATION</PublicationButton>
            <P4>5 Video Marketing Trends You Should Follow in 2019</P4>
            <P5>
              Got your 360-degree marketing video ready to go? What about that
              virtual reality how-to? Time to get ready for the future.
            </P5>
            <P5>
              Many consumers devote (what seems like) 24/7 of their time to
              holding a mobile device in one hand and dealing, with the other,
              with a million different companies vying for their attention on
              the web.
            </P5>
            <P5>
              If yours is one of those companies, you'll have to break through
              the noise by employing video marketing to grab all those mobile
              users' attention.
            </P5>
            <P5>
              Video is arguably the most entertaining and addicting form of
              content online. In fact, according to Google, half of
              18-to-34-year-old YouTube subscribers would drop what they’re
              doing to watch a new video by their favorite creator. But video
              trends are always changing; what’s popular one year might not be
              the next. So, how can your business use video marketing to grow
              your brand and keep up with consumers? Here are the five video
              marketing trends to watch for 2019.
            </P5>
          </LanguageContainer>

          <LanguageContainer>
            <span>Target: Russian</span>
            <P4>
              5 трендов видеомаркетинга, которым стоит следовать в 2019 году
            </P4>
            <P5>
              Уже смонтировали свое видео в 360 градусов? А обучающий ролик в
              виртуальной реальности? Пора готовиться к будущему!
            </P5>
            <P5>
              Многие люди проводят 24 часа в сутки 7 дней в неделю, держа в руке
              телефон. В это самое время (то есть, постоянно) бесчисленные
              компании со всего мира воюют между собой за внимание
              пользователей. Если ваша компания – среди этих воюющих полчищ, вам
              надо пробиться сквозь шум битвы, чтобы выделиться из общей массы.
              В этом деле не обойтись без видеомаркетинга.
            </P5>

            <P5>
              Можно сказать наверняка, что видео – один из самых увлекательных и
              затягивающих видов контента. Согласно данным Google, половина
              пользователей в возрастной категории от 18 до 34 лет бросили бы
              текущее занятие ради того, чтобы сейчас же посмотреть новое видео
              своего любимого блогера. Но видео-тренды постоянно меняются: то,
              что популярно в этом году, может сильно устареть в следующем.
              Итак, как использовать видеомаркетинг для того, чтобы поспевать за
              запросами потребителя и усилить влияние бренда? Ниже – пять
              трендов видеомаркетинга, за которыми стоит следить в 2019 году.
            </P5>
          </LanguageContainer>
        </PreviewContainer>
      </ContentContainer>
    </PageStyle>
  );
}

export default WhyPickMe;
