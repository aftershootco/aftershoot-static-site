import * as React from "react";
import { IconProps } from "../../../../types";

const CheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "#000", size = 13, ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        {...props}
        ref={forwardedRef}
      >
        <g clipPath="url(#clip0_12_1661)">
          <path
            d="M3.3335 7.99999L6.66683 11.3333L13.3335 4.66666"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_12_1661">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

CheckIcon.displayName = "CheckIcon";

export default CheckIcon;
