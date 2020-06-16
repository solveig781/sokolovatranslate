/* global window */

import React from 'react';
import styled from 'styled-components';

import { Col, S1, Row, S4, Button } from 'components';

import LinkedInIcon from './linkedin';

import EmailIcon from './email';
import WandIcon from './wand';
import FacebookIcon from './facebook';
import WhatsAppIcon from './whatsapp';

/* import * as React from 'react';
import { IconButton, Colors } from 'react-native-paper';

const MyComponent = () => (
  <IconButton
    icon="camera"
    color={Colors.red500}
    size={20}
    onPress={() => console.log('Pressed')}
  />
);

export default MyComponent;
*/

const PageWrapper = styled(Col)`
  background: linear-gradient(
      180deg,
      #7bb3e8 32.34%,
      rgba(255, 255, 255, 0) 100%
    ),
    #cbffe1;

  align-items: center;
  display: flex;
  justify-content: start;
  flex-grow: 1;
`;

const StyledButtonRow = styled(Row)`
  width: 100%;
  justify-content: flex-start;

  > ${Button} {
    width: 180px;
    max-height: 100px;
  }
`;
const HomeButton = styled(Button)`
  min-width: 180px;
  align-self: start;
`;

const PortfolioButton = styled(Button)``;

const Header = styled(Row)`
  align-items: center;
  justify-content: center;
  position: relative;
  right: 5%;
  margin: 40px;

  padding: 20px;
  width: 65%;

  svg {
    margin-right: 80px;
    margin-bottom: 50px;
  }
`;

const Icons = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 20px;
`;

const ButtonRow = styled(Row)`
  margin: 20px;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > ${S4} {
    margin-left: 30px;
  }

  svg {
    margin-left: 20px;
    margin-right: 20px;
  }

  > ${Button} {
    padding: 0;
    border: none;

    &:hover {
      background: none;

      svg {
        position: relative;
        bottom: 4px;
      }

      path {
      }
    }
  }
`;

const CVButton = styled(Button)`
  margin-left: auto;
`;

function openLinkedIn() {
  window.open('https://www.linkedin.com/in/sasha-sokolova-7aa70a177/');
}

function openFacebook() {
  window.open('https://www.facebook.com/solveig781');
}

function openResume() {
  window.open('Resume_Sasha_Sokolova.pdf', '_blank');
}

function openWhatsApp() {
  window.open('https://wa.me/9779829171449');
}

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
function scrollToPortfolio() {
  scrollToPage(1);
}

function Contact() {
  return (
    <PageWrapper>
      <StyledButtonRow>
        <HomeButton onClick={scrollToHome}>Home</HomeButton>
        <PortfolioButton onClick={scrollToPortfolio}>Portfolio</PortfolioButton>
        <CVButton onClick={openResume}>
          <span>MY CV</span>
        </CVButton>
      </StyledButtonRow>
      <Header>
        <WandIcon />
        <S1>
          <span>Contact me for some language magic</span>
        </S1>
      </Header>
      <Icons>
        <ButtonRow>
          <S4>
            <span>sokolova.alexandra812@gmail.com</span>
          </S4>
        </ButtonRow>
        <ButtonRow>
          <Button onClick={openLinkedIn}>
            <LinkedInIcon />
          </Button>
          <Button onClick={openFacebook}>
            <FacebookIcon />
          </Button>
          <Button onClick={openWhatsApp}>
            <WhatsAppIcon />
          </Button>
        </ButtonRow>
      </Icons>
    </PageWrapper>
  );
}

export default Contact;
