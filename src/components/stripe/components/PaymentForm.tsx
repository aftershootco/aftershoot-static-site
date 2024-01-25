"use client";

import AppButton from "@/components/ui/AppButton";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

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
      console.log(result.error.message);
    } else {
      console.log("success", result);
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
