"use client";

import AppIconComponent from "@/components/ui/icons";
import { cn } from "@/utils/cn";
import usePlanState from "../../../store/plan-state";
import { pricingDataProps } from "../data/pricing-data";
import PriceDisplay from "./pricing-display";

const PlanCard = ({ plan }: { plan: pricingDataProps }) => {
  const plantState = usePlanState();

  const billingPeriod = plantState.billingPeriod;

  const displayPrice =
    billingPeriod === "monthly" ? plan.price.monthly : plan.price.yearly;

  const handlePlanSelection = () => {
    plantState.setSelectedPlan(plan);
  };

  return (
    <button
      key={plan.id}
      className={cn(
        "flex flex-col justify-between gap-4 divide-purple-200 rounded-md border border-[#ABABAB] bg-white/70 p-4 shadow-sm transition-all active:scale-[99.5%] md:flex-row md:p-6",

        plan.highlight && "border-2 border-[#474747] bg-white",
      )}
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
              {feature.include && <AppIconComponent.CheckIcon />}
              <div>{feature.featureName}</div>
            </div>
          ))}
        </div>
      </div>

      <PriceDisplay
        price={displayPrice}
        className="mx-auto my-auto min-w-[130px] lg:mx-8"
      />
    </button>
  );
};

export default PlanCard;
