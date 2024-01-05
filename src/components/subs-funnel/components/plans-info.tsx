"use client";

import ToggleSwitch from "@/components/ui/toggle-switch";

const PlansInfo = () => {
  const handleSwitchToggle = () => {
    console.log("switch toggle");
  };

  return (
    <div className="bg-[#F6F6F6] font-archivo rounded-[20px] p-[48px] text-black">
      <button> Back </button>

      <div className="flex gap-8 items-center md:gap-16 mt-8">
        <h1 className="text-[34px] -tracking-[1.02px] leading-[44px]">
          Choose your plan
        </h1>

        <ToggleSwitch
          labelBefore="Monthly"
          labelAfter="Yearly"
          onToggle={handleSwitchToggle}
          className="font-semibold translate-y-1"
        />
      </div>
    </div>
  );
};

export default PlansInfo;
