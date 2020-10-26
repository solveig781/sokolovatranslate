import React from 'react';
import styled from 'styled-components';

import { Col } from 'components';

const Level = styled(Col)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: left;
  position: absolute;
  z-index: 0;
`;

const BigGreenBlob = styled.svg`
  position: absolute;
  transform: rotate(-2.09deg);
  transform: scale(0.8, 0.8);

  top: -61%;
  left: -44%;

  @media (max-width: 768px) {
    transform: scale(0.4, 0.4);
    left: -86%;
    top: -56%;
  }

  @media (max-width: 420px) {
    top: -49%;
    left: -170%;
  }
`;
const MiddlePurpleBlob = styled.svg`
  position: absolute;
  top: 8%;
  left: 0%;

  @media (max-width: 768px) {
    opacity: 0;
  }
`;
const SmallPinkBlob = styled.svg`
  position: absolute;
  top: 26%;
  left: 8%;

  @media (max-width: 768px) {
    opacity: 0;
  }
`;

function BlobsLevel() {
  return (
    <Level>
      <BigGreenBlob
        width="1458"
        height="1449"
        viewBox="0 0 1458 1449"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1159.2 514.053C1210.8 584.147 1276.95 647.196 1293.84 732.584C1312.86 828.677 1327.53 949.178 1259.19 1019.36C1188.42 1092.04 1065.08 1057.57 964.51 1070.81C892.737 1080.26 823.36 1095.66 751.589 1086.2C682.08 1077.03 623.601 1038.17 556.745 1017.06C458.621 986.078 329.375 1013.15 265.283 932.654C204.256 856.002 251.271 741.41 259.554 643.782C267.844 546.062 234.168 416.849 313.889 359.73C403.218 295.729 534.329 410.217 637.677 372.868C726.081 340.92 736.057 177.145 829.975 173.223C918.896 169.509 955.493 293 1017.32 357.012C1067.19 408.631 1116.65 456.26 1159.2 514.053Z"
            fill="#3CC37C"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="1457.54"
            height="1448.94"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="25" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.235294 0 0 0 0 0.764706 0 0 0 0 0.486275 0 0 0 0.44 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </BigGreenBlob>
      <MiddlePurpleBlob
        width="555"
        height="599"
        viewBox="0 0 555 599"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M196.117 503.13C150.379 500.162 113.214 460.187 90.5868 420.328C69.4984 383.179 70.3311 337.833 78.4788 295.9C85.4091 260.233 114.604 235.931 132.554 204.339C152.94 168.46 156.413 121.489 190.661 98.467C228.536 73.0062 281.82 55.8831 322.436 76.6949C363.171 97.5678 364.103 154.538 382.165 196.595C395.054 226.61 404.623 255.525 412.814 287.148C423.966 330.205 464.164 378.283 438.663 414.725C413.096 451.261 351.567 419.272 309.669 434.543C267.081 450.066 241.351 506.064 196.117 503.13Z"
            fill="#DC9EF2"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0.561768"
            y="0.513794"
            width="553.452"
            height="598.249"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="15" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.314097 0 0 0 0 0.212917 0 0 0 0 0.35 0 0 0 0.3 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </MiddlePurpleBlob>
      <SmallPinkBlob
        width="306"
        height="357"
        viewBox="0 0 306 357"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M140.341 26.9428C173.35 22.4615 190.607 67.1289 213.783 91.0577C232.374 110.253 251.981 127.842 262.042 152.599C272.725 178.888 279.495 207.567 272.284 235.013C264.831 263.385 247.901 290.72 222.091 304.662C197.509 317.941 168.228 304.595 140.341 306.289C109.738 308.147 74.4759 334.82 51.0435 315.049C27.1335 294.875 46.2291 254.958 42.6675 223.878C40.0483 201.022 25.8244 179.123 32.9612 157.252C40.0947 135.392 65.4622 126.955 80.0857 109.208C102.244 82.3184 105.814 31.6301 140.341 26.9428Z"
            fill="#E9BEF9"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0.978271"
            y="0.629395"
            width="304.298"
            height="355.68"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="15" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0693342 0 0 0 0 0.0649306 0 0 0 0 0.0708333 0 0 0 0.41 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </SmallPinkBlob>
    </Level>
  );
}

export default BlobsLevel;
