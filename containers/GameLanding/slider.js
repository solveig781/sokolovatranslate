import React, { useState } from 'react';
import styled from 'styled-components';

import { Col, Row, S3, H3, Button } from 'components';

import GreyArrowLeft from './greyarrowleft';
import GreyArrowRight from './greyarrowright';

const InfoContainer = styled(Col)`
  width: 65%;
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
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    opacity: 1;
    background: none;
  }
`;

const MediaContainer = styled(Row)`
  width: auto;
  height: 70%;
  justify-content: space-around;
  align-items: center;

  svg {
    margin: 0;

    @media (max-width: 420px) {
      transform: scale(0.7, 0.7);
    }

    @media (max-width: 370px) {
      transform: scale(0.6, 0.6);
    }
  }

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

  @media (max-width: 420px) {
    height: 95%;
    margin-top: 5%;
    margin-bottom: 5%;
  }
`;

const BigText = styled(S3)`
  margin: 5%;
  line-height: 30px;

  font-size: 20px;
  font-family: Lato;

  @media (max-width: 420px) {
    font-size: 16px;
    margin: 10%;
    margin-top: 5%;
    text-align: justify;
  }
`;

const MobileGameHeader = styled(Col)`
  justify-content: center;
  font-family: 'Josefin Sans';
  align-items: center;
  letter-spacing: 0.05em;
  min-height: 60px;

  @media (min-width: 768px) {
    display: none;
  }

  ${H3} {
    font-size: 28px;
    margin-bottom: 0;
  }
  ${Button} {
    background: none;
    padding: 10px;
    text-transform: none;
    font-family: Josefin Sans;
    border-bottom: none;
    font-size: 22px;
    color: #d9d4d4;
    max-height: 40px;

    &:hover {
      color: white;
      background: none;
      border-bottom: 4px solid #d9d4d4;
    }
  }
`;

function Slider({
  show = true,
  images,
  mobileTitle,
  mobileDeveloper,
  description,
}) {
  const [pictureIndex, setPictureIndex] = useState(0);

  // increases Picture Index by 1 and sets the original image (index - 0) when
  // it comes to the last,2 judging by the lenth of the row
  const nextPicture = () => {
    if (pictureIndex >= images.length) {
      setPictureIndex(0);
      return;
    }

    setPictureIndex(pictureIndex + 1);
  };

  const prevPicture = () => {
    if (pictureIndex <= 0) {
      setPictureIndex(images.length - 1); // "images.length - 1" is the last picture in a row
      return;
    }

    setPictureIndex(pictureIndex - 1);
  };

  console.log(mobileTitle);

  return (
    <InfoContainer className={show && 'visible'}>
      {/* && means "do what's in the quotes if the first thing is true"  */}
      {/* so it goes back to index.js to check if it's true */}
      {/* we have declared "visible in the stiles above" */}
      {/* that's how info container apperas or dissapears */}
      <MediaContainer>
        <Button onClick={prevPicture}>
          <GreyArrowLeft />
        </Button>
        {/* This part is also important, show image based on pictureIndex */}
        <BigPicPreview image={images[pictureIndex]} />
        <Button onClick={nextPicture}>
          <GreyArrowRight />
        </Button>
      </MediaContainer>
      <MobileGameHeader>
        <H3>{mobileTitle}</H3>
        <Button>{mobileDeveloper}</Button>
      </MobileGameHeader>
      <BigText>{description}</BigText>
    </InfoContainer>
  );
}

export default Slider;
