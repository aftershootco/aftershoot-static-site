import pricingData, { pricingDataProps } from "../data/pricing-data";
import PlanCard from "./plan-card";

type PricingPlanListProps = {
  handlePlanSelection: (plan: pricingDataProps) => void;
  selectedPlan: pricingDataProps | null;
};

const PricingPlanList = () => {
  return (
    <div className="grid md:grid-cols-2 gap-5 mt-6 shadow-sm">
      {pricingData.map((plan) => (
        <PlanCard key={plan.id} plan={plan} />
      ))}
    </div>
  );
};

export default PricingPlanList;
