import AppIcons from "@/assets/icons";
import { pricingDataProps } from "@/components/constant/pricing-data";

const PlanCard = ({ plan }: { plan: pricingDataProps }) => {
  console.log(plan);
  return (
    <div
      key={plan.id}
      className="p-4 rounded-md gap-4 border border-[#ABABAB] flex justify-between "
    >
      <div>
        <div>
          <h2 className="text-xl -tracking-[0.2px]">
            Aftershoot {plan.pricingName}
          </h2>
          <p className="text-xs tracking-[0.24px]">{plan.description}</p>
        </div>

        <div className="text-sm tracking-[0.14px] font-light space-y-2 mt-6">
          {plan.features.map((feature) => (
            <div key={feature.id} className="flex items-center gap-2">
              {feature.include && <AppIcons.CheckIcon />}
              <div>{feature.featureName}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-auto">
        <div className="flex gap-2 items-end">
          <div className="text-[45px] font-medium leading-[60px]">
            ${plan.originalPrice}
          </div>
          <div className="leading-[34px] text-suvaGrey text-[20px]">/mo</div>
        </div>
        <p className="text-[15.15px] tracking-[0.302px] text-[#323232]">
          {plan.billType}
        </p>
      </div>
    </div>
  );
};

export default PlanCard;
