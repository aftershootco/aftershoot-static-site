import * as React from "react";
import { IconProps } from "../../../../types";

const CheveronLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "#000", size = 13, ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        {...props}
        ref={forwardedRef}
      >
        <g clipPath="url(#clip0_12_1611)">
          <path
            d="M12.5 5L7.5 10L12.5 15"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_12_1611">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

CheveronLeftIcon.displayName = "CheveronLeftIcon";

export default CheveronLeftIcon;
