/* global window */

import React from 'react';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';

import { Col, S1, Row, S4, Button, Toasts } from 'components';

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

  @media (max-width: 700px) {
    justify-content: space-between;
  }

  @media (max-width: 430px) {
    border-bottom: 1px solid #cbffe1;
  }

  > ${Button} {
    width: 180px;
    max-height: 100px;

    @media (max-width: 700px) {
      padding: 20px;
      width: 120px;
      height: 120px;
      font-size: 12px;
      text-align: center;
    }

    @media (max-width: 430px) {
      border-bottom: none;
    }
  }
`;
const HomeButton = styled(Button)`
  max-width: 180px;
  align-self: start;

  @media (max-width: 700px) {
    padding: 20px;
    width: 120px;
    height: 120px;
    font-size: 12px;
  }
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
  text-align: center;

  @media (max-width: 700px) {
    width: 80%;
    justify-content: space-between;
    margin: 50px;
    margin-right: 0;
    margin-left: 0;
    padding-right: 0;
  }

  svg {
    margin-right: 80px;
    margin-bottom: 50px;

    @media (max-width: 700px) {
      margin: 0;
      margin-right: 10px;
      margin-bottom: 50px;
      min-width: 40px;
    }
  }

  > ${S1} {
    @media (max-width: 700px) {
      font-size: 20px;
      margin: 20px;
      margin-left: 0px;
      margin-right: 0;
      padding-right: 0;
    }
  }
`;

const Icons = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 20px;
  position: relative;

  @media (max-width: 700px) {
    margin-top: 50px;
  }
  @media (max-width: 320px) {
    position: relative;
    right: 3%;
    margin-top: 20px;
  }
`;

const ButtonRow = styled(Row)`
  margin: 20px;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 700px) {
    width: 80%;
  }

  > ${S4} {
    margin-left: 30px;

    @media (max-width: 700px) {
      margin: 0;
    }
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

  @media (max-width: 700px) {
    padding: 20px;
    width: 120px;
    height: 120px;
    font-size: 12px;
    margin: 0px;
  }
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
        <S1>Contact me for some language magic</S1>
      </Header>
      <Icons>
        <ButtonRow
          onClick={() => {
            Toasts.create.success({
              title: 'Email copied',
              content: <span>Hooray!</span>,
            });
            copy('sokolova.alexandra812@gmail.com');
          }}
        >
          <S4>sokolova.alexandra812@gmail.com</S4>
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
      <Toasts.Holder />
    </PageWrapper>
  );
}

export default Contact;
