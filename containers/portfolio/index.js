import React from 'react';
import styled from 'styled-components';

import { Row, Col, S1, P5, P4, Button } from 'components';

import ArrowIcon from './arrow';

const PageStyle = styled(Col)`
  background: #7bb3e8;
  height: 100%;
`;

const Header = styled(Row)`
  align-items: center;
  margin-top: 60px;
  margin-left: 40px;
  justify-content: space-between;
  border-bottom: 1px solid grey;
  color: white;
  font-family: Montserrat, sans-serif;
`;

const AllExamplesButton = styled(Button)`
  align-items: center;

  width: 180px;
  margin-right: 40px;
  text-transform: none;
  padding: 10px;
  position: relative;
  top: 16px;
  background: #f4976c;
  border-bottom: none;
  color: black;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Anonymous Pro, sans-serif;
`;

const Boxes = styled(Col)`
  flex-grow: 1;
  max-width: 350px;
  margin-right: 40px;
`;

const PreviewContainer = styled(Row)`
  background: #f9f2ec;
  max-width: 900px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const LanguageContainer = styled(Col)`
  border-right: 0.8px solid grey;
  border-left: 0.8px solid grey;

  flex-grow: 1;
  width: 50%;

  span {
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid black;
  }

  p {
    overflow-wrap: break-word;
    text-align: left;

    padding-left: 8px;
    padding-right: 8px;
  }
`;

const Box = styled(Button)`
  display: flex;
  align-items: start;
  justify-content: start;

  border-bottom: none;
  color: black;
  margin: 20px;
  padding: 10px;
  max-height: 100px;
`;

const ContentContainer = styled(Row)`
  flex-grow: 1;

  justify-content: space-between;
  margin: 40px;

  font-family: 'Montserrat', sans-serif;
`;

function WhyPickMe() {
  return (
    <PageStyle>
      <Header>
        <S1>How I Translate</S1>
        <AllExamplesButton>
          <span>all examples</span> <ArrowIcon />
        </AllExamplesButton>
      </Header>
      <ContentContainer>
        <Boxes>
          <Box>TRAVEL/TOURISM</Box>
          <Box>PR</Box>
          <Box>MARKETING</Box>
          <Box>WEBSITES/WEB CONTENT</Box>
          <Box>GENERAL</Box>
          <Box>CIVIL DOCUMENTS</Box>
        </Boxes>
        <PreviewContainer>
          <LanguageContainer>
            <span>Source - English</span>
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
            <span>Target - Russian</span>
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
