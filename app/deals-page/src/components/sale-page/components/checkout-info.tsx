"use client";

import usePlanState from "../../../store/plan-state";

import AppContainer from "@/components/ui/site/app-containr";
import useAppTaost from "@/hooks/useAppTaost";
import useQueryUtil from "@/hooks/useQueryUtil";
import { cn } from "@/utils/cn";
import { getFromLocalStorage } from "@/utils/recordTrialStartLS";
import { useEffect } from "react";
import pricingData from "../data/pricing-data";
import BackButton from "./back-button";
import CheckoutFoot from "./checkout-foot";
import CheckoutFormContainer from "./checkout-form-container";
import PriceDisplay from "./pricing-display";

const CheckoutInfo = () => {
  const plantState = usePlanState();

  const isPlanSelected = plantState.selectedPlan;
  const SELECTED_PLAN = plantState.selectedPlan;
  const billingPeriod = plantState.billingPeriod;

  const triggerToast = useAppTaost();
  const { clearQueryParams, getQueryParams } = useQueryUtil();

  const displayPrice =
    billingPeriod === "monthly"
      ? SELECTED_PLAN?.price.monthly
      : SELECTED_PLAN?.price.yearly;

  const handleOnBackButtonClick = () => {
    plantState.setSelectedPlan(null);
    clearQueryParams();
  };

  useEffect(() => {
    const trialStarted = getFromLocalStorage("trialStarted");
    if (trialStarted) {
      triggerToast("You have already started your trial", "failure");
      plantState.setSelectedPlan(null);
    }
  }, [isPlanSelected]);

  useEffect(() => {
    const priceSelectionInQuery = getQueryParams("p");
    // console.log(priceSelectionInQuery);
    if (priceSelectionInQuery) {
      const selectedPlan = pricingData.find(
        (plan) => plan.id === priceSelectionInQuery,
      );
      plantState.setSelectedPlan(selectedPlan ?? null);
    }
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex max-h-screen translate-x-full overflow-y-scroll transition-all duration-1000",
        isPlanSelected && "translate-x-0 ",
      )}
    >
      <AppContainer className="my-auto">
        <div className="rounded-[20px] bg-[#F6F6F6] px-6 py-8 font-archivo text-black md:p-[48px]">
          <BackButton onClick={handleOnBackButtonClick} />
          <div className="mt-8 flex flex-col gap-8 text-xl -tracking-[0.2px] md:flex-row md:gap-[60px]">
            <div className="flex-1">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div>
                  <h1 className="text-2xl sm:text-base">
                    Subscribe to Aftershoot {SELECTED_PLAN?.pricingName}
                  </h1>
                  <p className="text-sm tracking-[0.14px] text-suvaGrey">
                    {` Then $${SELECTED_PLAN?.price.yearly} per year after the coupon expires`}
                  </p>
                </div>
                <PriceDisplay
                  price={displayPrice ?? 0}
                  className="mx-8 my-auto text-[40px]"
                />
              </div>

              {/* <PromocodeInput /> */}

              <div className="mt-8 md:mt-14">
                <h2 className="font-semibold">Review your subscription</h2>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-light tracking-[0.14px]">
                      Aftershoot {SELECTED_PLAN?.pricingName}
                    </div>
                    <div>
                      {SELECTED_PLAN?.price.yearly ?? "00"}
                      <span className="text-suvaGrey">/year</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm font-light tracking-[0.14px]">
                      Subtotal
                    </div>
                    <div>{SELECTED_PLAN?.price.yearly ?? "00"}</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm font-light tracking-[0.14px]">
                      Total
                    </div>
                    <div>{SELECTED_PLAN?.price.yearly ?? "00"}</div>
                  </div>
                </div>
              </div>

              <CheckoutFoot className="hidden md:flex" />
            </div>

            {/* stripe form */}
            <CheckoutFormContainer />

            <CheckoutFoot className=" mt-8 md:hidden" />
          </div>
        </div>
      </AppContainer>
    </div>
  );
};

export default CheckoutInfo;
