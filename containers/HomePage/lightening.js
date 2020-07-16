import React from 'react';

export default function Lightening() {
  return (
    <svg
      width="930"
      height="542"
      viewBox="0 0 930 542"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.2" filter="url(#filter0_d)">
        <path
          d="M442.32 232.871L63.2247 5.93593e-06L474.69 419.419L491.686 302.35L866.714 533.194L459.315 115.802L442.32 232.871Z"
          fill="#B8B6B4"
        />
        <path
          d="M442.32 232.871L63.2247 5.93593e-06L474.69 419.419L491.686 302.35L866.714 533.194L459.315 115.802L442.32 232.871Z"
          fill="url(#paint0_linear)"
          fillOpacity="0.6"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="7.62939e-06"
          width="929.939"
          height="541.194"
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
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
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
          x1="307.042"
          y1="204.583"
          x2="896.268"
          y2="354.476"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8F8F8" />
          <stop offset="0.661458" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
