"use client";

import AppIconComponent from "@/components/ui/icons";
import useQueryUtil from "@/hooks/useQueryUtil";
import { cn } from "@/utils/cn";
import usePlanState from "../../../store/plan-state";
import { pricingDataProps } from "../data/pricing-data";
import BestPlanHightlight from "./best-plan-hightlight";
import PriceDisplay from "./pricing-display";

const PlanCard = ({ plan }: { plan: pricingDataProps }) => {
  const plantState = usePlanState();
  const { updateQueryParams } = useQueryUtil();
  const billingPeriod = plantState.billingPeriod;

  const displayPrice =
    billingPeriod === "monthly" ? plan.price.monthly : plan.price.yearly;

  const handlePlanSelection = () => {
    plantState.setSelectedPlan(plan);
    updateQueryParams(plan.id, "p");
  };

  return (
    <button
      key={plan.id}
      className={cn(
        "relative flex flex-col justify-between gap-2 divide-purple-200 rounded-md border border-[#ABABAB] bg-white/70 p-4 shadow-sm transition-all active:scale-[99.5%] md:flex-row md:p-6",
        plan.highlight && "border-2 border-[#474747] bg-white",
        plantState.selectedPlan?.id === plan.id && "bg-[#6392D5]/20",
      )}
      onClick={handlePlanSelection}
    >
      <BestPlanHightlight hide={!plan.highlight} />

      <div className="text-left">
        <div>
          <h2 className="text-xl -tracking-[0.2px]">
            Aftershoot {plan.pricingName}
          </h2>
          <p className=" text-xs tracking-[0.24px]">{plan.description}</p>
        </div>

        <div className="mt-6 space-y-2 text-sm font-light tracking-[0.14px]">
          {plan.features.map((feature) => (
            <div
              key={feature.id}
              className="flex max-w-[250px] items-center gap-2 lg:overflow-visible"
            >
              {feature.include ? (
                <AppIconComponent.CheckIcon
                  color="#71B4A7"
                  className="shrink-0"
                />
              ) : (
                <AppIconComponent.CrossIcon
                  color="#DC4949"
                  className="shrink-0"
                />
              )}

              <div className="lg:whitespace-nowrap">{feature.featureName}</div>
            </div>
          ))}
        </div>
      </div>

      <PriceDisplay
        price={displayPrice ?? 0}
        className="mx-auto my-auto min-w-[100px] lg:mx-4"
      />
    </button>
  );
};

export default PlanCard;