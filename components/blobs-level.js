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

const BigGreenBlob = styled.svg``;
const MiddlePurpleBlob = styled.svg`
  position: absolute;
  top: 8%;
  left: -5%;

  @media (max-width: 460px) {
    opacity: 0;
  }
`;
const SmallPinkBlob = styled.svg`
  position: absolute;
  top: 26%;
  left: 2%;

  @media (max-width: 460px) {
    opacity: 0;
  }
`;

function BlobsLevel() {
  return (
    <Level>
      <BigGreenBlob
        width="966"
        height="900"
        viewBox="0 0 966 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M666.928 223.679C718.536 293.773 784.678 356.822 801.576 442.21C820.591 538.303 835.259 658.804 766.923 728.987C696.155 801.665 572.815 767.195 472.242 780.438C400.469 789.888 331.091 805.283 259.32 795.822C189.811 786.66 131.333 747.794 64.4762 726.685C-33.648 695.704 -162.893 722.781 -226.985 642.28C-288.013 565.628 -240.997 451.036 -232.715 353.408C-224.424 255.688 -258.101 126.475 -178.379 69.3565C-89.0501 5.35483 42.0603 119.843 145.409 82.4937C233.812 50.5456 243.789 -113.229 337.706 -117.151C426.627 -120.865 463.224 2.62587 525.056 66.638C574.917 118.257 624.377 165.886 666.928 223.679Z"
            fill="#3CC37C"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="-492.269"
            y="-290.374"
            width="1457.54"
            height="1448.94"
            filterUnits="userSpaceOnUse"
            colorInterpolation-filters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            colorInterpolation-filters="sRGB"
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
              values="0 0 0 0 0.45825 0 0 0 0 0.305365 0 0 0 0 0.5125 0 0 0 0.3 0"
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
            colorInterpolation-filters="sRGB"
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
              values="0 0 0 0 0.477791 0 0 0 0 0.375833 0 0 0 0 0.5125 0 0 0 0.2 0"
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
