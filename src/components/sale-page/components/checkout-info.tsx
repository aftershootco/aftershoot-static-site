"use client";

import usePlanState from "../../../../store/plan-state";
import BackButton from "./back-button";
import PriceDisplay from "./pricing-display";
import PromocodeInput from "./promocode-input";

const CheckoutInfo = () => {
  const plantState = usePlanState();

  const ACTIVE_PLAN = plantState.selectedPlan;

  const handleOnBackButtonClick = () => {
    plantState.setSelectedPlan(null);
  };

  return (
    <div className="rounded-[20px] bg-[#F6F6F6] p-[48px] font-archivo text-black">
      <BackButton onClick={handleOnBackButtonClick} />
      <div className="mt-8 flex gap-4 text-xl -tracking-[0.2px]">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h1>Subscribe to Aftershoot {ACTIVE_PLAN?.pricingName}</h1>
              <p className="text-sm tracking-[0.14px] text-suvaGrey">
                {` Then $${ACTIVE_PLAN?.price.yearly} per year after the coupon expires`}
              </p>
            </div>
            <PriceDisplay
              price={ACTIVE_PLAN?.price.monthly}
              className="mx-8 my-auto"
            />
          </div>

          <PromocodeInput />

          <div className="mt-6">
            <h2 className="font-semibold">Review your subscription</h2>

            <div>
              <div>
                <div>Aftershoot {ACTIVE_PLAN?.pricingName}</div>
                <div></div>
              </div>
            </div>
          </div>
        </div>

        {/* stripe form */}
        <div className="flex-1 rounded-md bg-white shadow-xl">
          <div className="p-4">placeholder</div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutInfo;
