import { cn } from "@/utils/cn";
import React from "react";

type TAppContainer = {
  children: React.ReactNode;
  className?: string;
};

const AppContainer = (props: TAppContainer) => {
  const { className, children } = props;

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[80rem] px-2 py-8 md:py-14 xxl:px-0",
        className && className
      )}
    >
      {children}
    </div>
  );
};

export default AppContainer;
