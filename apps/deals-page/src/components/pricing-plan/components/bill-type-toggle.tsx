"use client";

import usePricingState from "@/store/pricing-state";
import { cn } from "@/utils/cn";
import { motion, spring } from "framer-motion";

const buttonConfig: {
  name: string;
  value: "monthly" | "annually";
}[] = [
  {
    name: "Billed Monthly",
    value: "monthly",
  },
  {
    name: "Billed Annually",
    value: "annually",
  },
];

const BillTypeToggle = () => {
  const pricingState = usePricingState();

  const activeBillType = pricingState.billingPeriod;

  const handleToggleBillType = (value: "monthly" | "annually") => {
    console.log("value", value);
    pricingState.updateBillingPeriod(value);
  };

  return (
    <div className="pt-8">
      <div className="mx-auto w-max rounded-lg border-[1px] border-white p-1 font-archivo">
        {buttonConfig.map((button) => (
          <button
            key={button.value}
            className={cn("relative px-6 py-[11.5px] mix-blend-exclusion")}
            onClick={() => handleToggleBillType(button.value)}
          >
            <div
              className={cn(
                "relative z-10 ",
                activeBillType === button.value && "mix-blend-exclusion",
              )}
            >
              {button.name}
            </div>

            {activeBillType === button.value && (
              <motion.div
                layoutId="tab-button"
                transition={{ type: spring }}
                className="absolute inset-0 scale-100 rounded-md bg-white"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BillTypeToggle;
