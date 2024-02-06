import React from "react";

const ComponentContianer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="font-erode-variable min-h-screen bg-[#0D0D0D] py-[40px]  text-white md:pt-[60px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 81.77%), url(<path-to-image>), lightgray -233.596px 0px / 112.593% 100% no-repeat",
      }}
    >
      {children}
    </div>
  );
};

export default ComponentContianer;
