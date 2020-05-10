import React from 'react';
import styled from 'styled-components';

import { Col, S1, Row, S4, Button } from 'components';

import LinkedInIcon from './linkedin';
import EmailIcon from './email';
import WandIcon from './wand';
import FacebookIcon from './facebook';
import WhatsAppIcon from './whatsapp';
import ArrowIcon from './arrow';

const PageWrapper = styled(Col)`
  background: linear-gradient(
      180deg,
      #7bb3e8 32.34%,
      rgba(255, 255, 255, 0) 100%
    ),
    #cbffe1;

  align-items: center;
  flex-grow: 1;
`;

const Header = styled(Row)`
  background: lightyellow;
  align-items: center;
  justify-content: center;
  margin: 80px;
  padding: 20px;
  width: 65%;
`;

const Icons = styled(Col)`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const IconRow = styled(Row)`
  margin: 20px;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  background: lightgreen;

  svg {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const CVButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 16px;
  padding-right: 16px;

  min-width: 150px;
  color: black;
`;

function Contact() {
  return (
    <PageWrapper>
      <Header>
        <WandIcon />
        <S1>Contact me for some language magic</S1>
      </Header>
      <Icons>
        <IconRow>
          <EmailIcon />
          <S4>sokolova.alexandra812@gmail.com</S4>
        </IconRow>
        <IconRow>
          <LinkedInIcon />
          <FacebookIcon />
          <WhatsAppIcon />
        </IconRow>
      </Icons>
      <CVButton>
        <span>See my CV</span>
        <ArrowIcon />
      </CVButton>
    </PageWrapper>
  );
}

export default Contact;
