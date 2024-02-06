"use client";

import AppButton from "@/components/ui/AppButton";
import useAppTaost from "@/hooks/useAppTaost";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useRouter, useSearchParams } from "next/navigation";

import LoadingIcon from "@/components/ui/icons/loading-icon";
import usePlanState from "@/store/plan-state";
import { addToLocalStorage } from "@/utils/recordTrialStartLS";
import { useState } from "react";
import startTrial from "../handler/startTrial";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const search = useSearchParams();
  const email = search.get("email");
  const plantState = usePlanState();
  const triggerToast = useAppTaost();

  const keyToAdd = "trialStarted";

  const SELECTED_PLAN = plantState.selectedPlan;
  const SELECTED_PRODUCT_ID = SELECTED_PLAN?.productId;

  const [startTrialLoading, setStartTrialLoading] = useState(false);

  type startTrial = {
    id: string;
    productId: string;
  };

  const handleSubmit = async () => {
    if (!stripe || !elements) {
      return;
    }

    setStartTrialLoading(true);

    const result = await stripe.confirmSetup({
      elements,
      redirect: "if_required",
    });

    if (result.error) {
      triggerToast(result.error.message ?? "Error", "failure");
    } else {
      const res = await startTrial(
        result.setupIntent?.id,
        SELECTED_PRODUCT_ID!,
      );

      if (res?.success) {
        triggerToast("Payment success", "success");
        router.push("https://aftershoot.com/thank-you/");
        addToLocalStorage("trialStarted", true);
        addToLocalStorage("plan", SELECTED_PLAN?.pricingName);
      } else {
        triggerToast("Something went wrong!", "failure");
      }
      setStartTrialLoading(false);
    }
    setStartTrialLoading(false);
  };

  const handleButton = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <form onSubmit={handleButton} className="py-4">
      <PaymentElement
        options={{
          defaultValues: {
            billingDetails: {
              email: email ?? "none",
            },
          },
        }}
      />

      <AppButton type="submit" className="mt-8 w-full">
        {startTrialLoading ? <LoadingIcon /> : "Next"}
      </AppButton>
    </form>
  );
};

export default PaymentForm;
