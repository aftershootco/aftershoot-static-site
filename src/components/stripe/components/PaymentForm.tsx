"use client";

import AppButton from "@/components/ui/AppButton";
import useAppTaost from "@/hooks/useAppTaost";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const triggerToast = useAppTaost();

  const handleSubmit = async () => {
    if (!stripe || !elements) {
      return;
    }

    console.log("elements", elements);

    const result = await stripe.confirmSetup({
      elements,
      redirect: "if_required",
    });

    if (result.error) {
      // Display result.error.message in your UI. TOAST
      triggerToast(result.error.message ?? "Error", "failure");
      console.log(result.error.message);
    } else {
      console.log("success", result);
      triggerToast("Payment success", "success");
      // redirect here
      // https://aftershoot.com/thank-you/
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
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
              email: "arvind@aftershoot.com",
            },
          },
        }}
      />

      <AppButton type="submit" className="mt-8 w-full" disabled={!stripe}>
        Next
      </AppButton>
    </form>
  );
};

export default PaymentForm;
