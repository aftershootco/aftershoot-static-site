import pricingData from "../data/pricing-data";
import PlanCard from "./plan-card";

const PricingPlanList = () => {
  return (
    <div className="mt-6 grid gap-5 md:grid-cols-2">
      {pricingData.map((plan) => (
        <PlanCard key={plan.id} plan={plan} />
      ))}
    </div>
  );
};

export default PricingPlanList;
