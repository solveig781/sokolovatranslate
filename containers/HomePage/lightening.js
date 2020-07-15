import React from 'react';

export default function Lightening() {
  return (
    <svg
      width="370"
      height="146"
      viewBox="0 0 370 146"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.35" filter="url(#filter0_d)">
        <path
          d="M172.729 63.4608L4.00003 45.1108L201.508 100.802L198.077 74.2549L365.036 92.5091L169.298 36.9135L172.729 63.4608Z"
          fill="#A2A2A2"
        />
        <path
          d="M172.729 63.4608L4.00003 45.1108L201.508 100.802L198.077 74.2549L365.036 92.5091L169.298 36.9135L172.729 63.4608Z"
          fill="url(#paint0_linear)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="6.10352e-05"
          y="0"
          width="369.036"
          height="145.62"
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
          x1="117.245"
          y1="68.6778"
          x2="359.444"
          y2="82.5595"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
