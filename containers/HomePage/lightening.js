import React from 'react';

export default function Lightening({ className }) {
  return (
    <svg
      width="503"
      height="197"
      viewBox="0 0 503 197"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <path
          d="M234.941 86.8595L4 61.7436L274.331 137.969L269.635 101.634L498.154 126.618L230.245 50.5238L234.941 86.8595Z"
          fill="#AFAFAF"
        />
        <path
          d="M234.941 86.8595L4 61.7436L274.331 137.969L269.635 101.634L498.154 126.618L230.245 50.5238L234.941 86.8595Z"
          fill="url(#paint0_linear)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="-7.62939e-06"
          y="0"
          width="502.154"
          height="196.362"
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
          x1="12.1812"
          y1="125.053"
          x2="489.973"
          y2="63.3091"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
