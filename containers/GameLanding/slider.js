import React, { useState } from 'react';
import styled from 'styled-components';

import { Col, Row, H5, S3, Button } from 'components';

import GreyArrowLeft from './greyarrowleft';
import GreyArrowRight from './greyarrowright';

const InfoContainer = styled(Col)`
  width: 60%;
  height: 100%;
  background: rgba(237, 245, 225, 0.2);

  position: relative;
  left: 100vw;
  opacity: 0;

  transition: all 0.5s ease;

  &.visible {
    opacity: 1;
    left: 0;
  }
`;

const MediaContainer = styled(Row)`
  width: auto;
  height: 70%;
  justify-content: space-around;
  align-items: center;

  > ${Button} {
    padding: 0;
    margin: 0;
    border-bottom: none;

    &:hover {
      background: none;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.45));
    }
  }
`;

const BigPicPreview = styled.div`
  width: 80%;
  height: 85%;

  border: 0.5px solid #9c9c9c;

  background: url(${({ image }) => image}) no-repeat center center;
  background-size: cover;
`;

const BigText = styled(Col)`
  font-size: 20px;
  font-family: Lato;
  margin: 10%;
  margin-top: 5%;
  line-height: 30px;
`;

function Slider({ show, images }) {
  console.log(images);
  // Declare a new state variable, which we'll call "count"
  const [pictureIndex, setPictureIndex] = useState(0);

  const nextPicture = () => {};
  const prevPicture = () => {};

  return (
    <InfoContainer className={show && 'visible'}>
      <MediaContainer>
        <Button onClick={prevPicture}>
          <GreyArrowLeft />
        </Button>
        <BigPicPreview image={images[pictureIndex]} />
        <Button onClick={nextPicture}>
          <GreyArrowRight />
        </Button>
      </MediaContainer>
      <BigText>
        <S3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </S3>
      </BigText>
    </InfoContainer>
  );
}

export default Slider;
