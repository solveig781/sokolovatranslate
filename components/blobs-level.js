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
  left: -40%;

  @media (max-width: 768px) {
    transform: scale(0.4, 0.4);
    left: -86%;
    top: -56%;
  }

  @media (max-width: 420px) {
    transform: rotate(702.09deg);
    top: -56%;
    left: -273%;
  }

  @media (max-width: 380px) {
    transform: rotate(702.09deg);
    top: -46%;
    left: -303%;
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1159.2 514.053C1210.8 584.147 1276.95 647.196 1293.84 732.584C1312.86 828.677 1327.53 949.178 1259.19 1019.36C1188.42 1092.04 1065.08 1057.57 964.51 1070.81C892.737 1080.26 823.36 1095.66 751.589 1086.2C682.08 1077.03 623.601 1038.17 556.745 1017.06C458.621 986.078 329.375 1013.15 265.283 932.654C204.256 856.002 251.271 741.41 259.554 643.782C267.844 546.062 234.168 416.849 313.889 359.73C403.218 295.729 534.329 410.217 637.677 372.868C726.081 340.92 736.057 177.145 829.975 173.223C918.896 169.509 955.493 293 1017.32 357.012C1067.19 408.631 1116.65 456.26 1159.2 514.053Z"
            fill="#3CC37C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1159.2 514.053C1210.8 584.147 1276.95 647.196 1293.84 732.584C1312.86 828.677 1327.53 949.178 1259.19 1019.36C1188.42 1092.04 1065.08 1057.57 964.51 1070.81C892.737 1080.26 823.36 1095.66 751.589 1086.2C682.08 1077.03 623.601 1038.17 556.745 1017.06C458.621 986.078 329.375 1013.15 265.283 932.654C204.256 856.002 251.271 741.41 259.554 643.782C267.844 546.062 234.168 416.849 313.889 359.73C403.218 295.729 534.329 410.217 637.677 372.868C726.081 340.92 736.057 177.145 829.975 173.223C918.896 169.509 955.493 293 1017.32 357.012C1067.19 408.631 1116.65 456.26 1159.2 514.053Z"
            fill="url(#gradient1)"
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
            colorinterpolation-filters="sRGB"
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
              values="0 0 0 0 0.128125 0 0 0 0 0.375 0 0 0 0 0.245162 0 0 0 0.44 0"
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
          <linearGradient
            id="gradient1"
            x1="546.269"
            y1="285.374"
            x2="1083.27"
            y2="915.874"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.44" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </BigGreenBlob>
      <MiddlePurpleBlob
        width="554"
        height="599"
        viewBox="0 0 554 599"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M195.555 502.616C149.818 499.648 112.652 459.674 90.025 419.814C68.9366 382.666 69.7693 337.32 77.917 295.387C84.8473 259.719 114.042 235.417 131.992 203.826C152.379 167.947 155.851 120.976 190.099 97.9533C227.974 72.4926 281.258 55.3694 321.874 76.1812C362.609 97.0541 363.542 154.024 381.603 196.081C394.493 226.096 404.061 255.012 412.252 286.634C423.404 329.691 463.603 377.769 438.101 414.211C412.534 450.748 351.005 418.758 309.108 434.029C266.52 449.552 240.789 505.551 195.555 502.616Z"
            fill="#CD97F8"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M195.555 502.616C149.818 499.648 112.652 459.674 90.025 419.814C68.9366 382.666 69.7693 337.32 77.917 295.387C84.8473 259.719 114.042 235.417 131.992 203.826C152.379 167.947 155.851 120.976 190.099 97.9533C227.974 72.4926 281.258 55.3694 321.874 76.1812C362.609 97.0541 363.542 154.024 381.603 196.081C394.493 226.096 404.061 255.012 412.252 286.634C423.404 329.691 463.603 377.769 438.101 414.211C412.534 450.748 351.005 418.758 309.108 434.029C266.52 449.552 240.789 505.551 195.555 502.616Z"
            fill="url(#paint0_linear)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0.00012207"
            width="553.452"
            height="598.249"
            filterUnits="userSpaceOnUse"
            colorinterpolation-filters="sRGB"
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
              values="0 0 0 0 0.280103 0 0 0 0 0.188802 0 0 0 0 0.3125 0 0 0 0.5 0"
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
          <linearGradient
            id="paint0_linear"
            x1="213.07"
            y1="510.02"
            x2="340.382"
            y2="80.2289"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.49" />
            <stop offset="0.852677" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </MiddlePurpleBlob>
      <SmallPinkBlob
        width="305"
        height="356"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)" fillRule="evenodd" clipRule="evenodd">
          <path
            d="M139.362 26.313c33.01-4.48 50.267 40.186 73.442 64.115 18.592 19.196 38.199 36.785 48.259 61.542 10.684 26.289 17.454 54.968 10.243 82.414-7.454 28.372-24.383 55.706-50.193 69.649-24.582 13.279-53.863-.067-81.751 1.626-30.602 1.859-65.864 28.531-89.297 8.76-23.91-20.174-4.814-60.09-8.376-91.17-2.619-22.857-16.843-44.755-9.706-66.626 7.133-21.861 32.5-30.298 47.124-48.044 22.159-26.89 25.729-77.578 60.255-82.266z"
            fill="#E9BEF9"
          />
          <path
            d="M139.362 26.313c33.01-4.48 50.267 40.186 73.442 64.115 18.592 19.196 38.199 36.785 48.259 61.542 10.684 26.289 17.454 54.968 10.243 82.414-7.454 28.372-24.383 55.706-50.193 69.649-24.582 13.279-53.863-.067-81.751 1.626-30.602 1.859-65.864 28.531-89.297 8.76-23.91-20.174-4.814-60.09-8.376-91.17-2.619-22.857-16.843-44.755-9.706-66.626 7.133-21.861 32.5-30.298 47.124-48.044 22.159-26.89 25.729-77.578 60.255-82.266z"
            fill="url(#paint0_linear)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="119"
            y1="70.5"
            x2="173"
            y2="228"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" stopOpacity=".71" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="304.298"
            height="355.68"
            filterUnits="userSpaceOnUse"
            colorinterpolation-filters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="15" />
            <feColorMatrix values="0 0 0 0 0.0693342 0 0 0 0 0.0649306 0 0 0 0 0.0708333 0 0 0 0.41 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend
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
