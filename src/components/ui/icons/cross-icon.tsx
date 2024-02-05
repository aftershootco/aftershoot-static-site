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
        ref={forwardedRef}
        {...props}
      >
        <g clip-path="url(#clip0_342_371)">
          <path
            d="M12 4L4 12M4 4L12 12L4 4Z"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_342_371">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

CheckIcon.displayName = "CheckIcon";

export default CheckIcon;
