import { cn } from "@/utils/cn";
import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "dark" | "accent" | "outline";
  children: React.ReactNode;
}

const AppButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = "dark", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "w-max shrink-0 rounded-md border-2 border-transparent px-8 py-4 font-archivo font-medium text-white transition-all duration-300 ",
          variant === "dark" &&
            "bg-nightRider hover:bg-suvaGrey active:bg-[#1B1B1B] disabled:bg-[#DADADA]",
          variant === "accent" &&
            "bg-cornflowerBlue hover:bg-mayaBlue active:bg-[#517ED8]",

          variant === "outline" &&
            " border-2 border-nightRider text-nightRider hover:border-cornflowerBlue hover:text-cornflowerBlue active:border-transparent",

          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

AppButton.displayName = "Button";

export default AppButton;
