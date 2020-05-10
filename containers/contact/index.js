import React from 'react';
import styled from 'styled-components';

import { Col, S1 } from 'components';

import LinkedInIcon from './linkedin';
import EmailIcon from './email';
import WandIcon from './wand';

function Contact({}) {
  return (
    <Col alignItems="center">
      <div />
      <LinkedInIcon />
      <EmailIcon />
      <WandIcon />
      <S1>Contact me for some language magic</S1>
    </Col>
  );
}

export default Contact;
