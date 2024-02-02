import { cn } from "@/utils/cn";
import React, { forwardRef, HTMLAttributes } from "react";

type TAppContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

const AppContainer = forwardRef<HTMLDivElement, TAppContainerProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full max-w-[1000px] px-2 py-8 md:py-14 xxl:px-0",
          className && className,
        )}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

AppContainer.displayName = "AppContainer";

export default AppContainer;
