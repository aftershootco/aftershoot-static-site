"use client";

import ToggleSwitch from "@/components/ui/toggle-switch";

const PlansInfo = () => {
  const handleSwitchToggle = () => {
    console.log("switch toggle");
  };

  return (
    <div className="bg-[#F6F6F6] rounded-[20px] p-[48px] text-black">
      <button> Back </button>

      <div className="flex gap-4">
        <h1>Choose your plan</h1>

        <ToggleSwitch
          labelBefore="Monthly"
          labelAfter="Yearly"
          onToggle={handleSwitchToggle}
        />
      </div>
    </div>
  );
};

export default PlansInfo;
