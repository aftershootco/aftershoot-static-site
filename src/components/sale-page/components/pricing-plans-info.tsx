"use client";

import usePlanState from "../../../../store/plan-state";

import ToggleSwitch from "@/components/ui/toggle-switch";
import BackButton from "./back-button";
import PlanList from "./pricing-plan-list";

const PricingPlansInfo = () => {
  const plantState = usePlanState();

  const handleSwitchToggle = () => {
    plantState.toggleBillingPeriod();
  };

  const handleOnBackButtonClick = () => {
    console.log("back button click");
  };

  // if (plantState.selectedPlan) return null;

  return (
    <div className="rounded-[20px] bg-[#F6F6F6] p-[48px] font-archivo text-black">
      <BackButton onClick={handleOnBackButtonClick} />

      <div className="mt-8 flex items-center gap-8 md:gap-16">
        <h1 className="text-[34px] leading-[44px] -tracking-[1.02px]">
          Choose your plan
        </h1>

        <ToggleSwitch
          labelBefore="Monthly"
          labelAfter="Yearly"
          onToggle={handleSwitchToggle}
          className="translate-y-1 font-semibold"
        />
      </div>

      <PlanList />
    </div>
  );
};

export default PricingPlansInfo;
