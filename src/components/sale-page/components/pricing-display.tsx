import { cn } from "@/utils/cn";
import usePlanState from "../../../../store/plan-state";

type PriceDisplayProps = {
  price?: number;
  className?: string;
};

const PriceDisplay = (props: PriceDisplayProps) => {
  const plantState = usePlanState();

  const { price = "00", className } = props;

  const billingPeriod = plantState.billingPeriod;

  const perPeriodic = billingPeriod === "monthly" ? "mo" : "yr";
  const billyPeriodic = billingPeriod === "monthly" ? "Monthly" : "Annually";

  return (
    <div className={cn(className && className)}>
      <div className="flex items-end gap-2">
        <div className="text-[34px] font-medium leading-[60px] lg:text-[45px]">
          ${price}
        </div>
        <div className="text-[20px] leading-[34px] text-suvaGrey">
          /{perPeriodic}
        </div>
      </div>
      <p className="text-[15.15px] tracking-[0.302px] text-[#323232]">
        Billed {billyPeriodic}
      </p>
    </div>
  );
};

export default PriceDisplay;
