"use client";

import AppIcons from "@/assets/icons";
import usePlanState from "../../../../store/plan-state";
import { pricingDataProps } from "../data/pricing-data";
import PriceDisplay from "./pricing-display";

const PlanCard = ({ plan }: { plan: pricingDataProps }) => {
  const plantState = usePlanState();

  const handlePlanSelection = () => {
    plantState.setSelectedPlan(plan);
  };

  return (
    <button
      key={plan.id}
      className="flex justify-between gap-4 rounded-md border border-[#ABABAB] p-4 shadow-sm md:p-6"
      onClick={handlePlanSelection}
    >
      <div className="text-left">
        <div>
          <h2 className="text-xl -tracking-[0.2px]">
            Aftershoot {plan.pricingName}
          </h2>
          <p className="text-xs tracking-[0.24px]">{plan.description}</p>
        </div>

        <div className="mt-6 space-y-2 text-sm font-light tracking-[0.14px]">
          {plan.features.map((feature) => (
            <div key={feature.id} className="flex items-center gap-2">
              {feature.include && <AppIcons.CheckIcon />}
              <div>{feature.featureName}</div>
            </div>
          ))}
        </div>
      </div>

      <PriceDisplay price={plan.price.monthly} className="mx-8 my-auto" />
    </button>
  );
};

export default PlanCard;
