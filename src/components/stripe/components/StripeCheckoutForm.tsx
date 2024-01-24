"use client";

import AppButton from "@/components/ui/AppButton";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  PaymentElement,
} from "@stripe/react-stripe-js";

const StripeCheckoutForm = () => {
  return (
    <form>
      <PaymentElement />

      <CardNumberElement />
      <CardExpiryElement />
      <CardCvcElement />

      <AppButton className="my-8 w-full">Next</AppButton>
    </form>
  );
};

export default StripeCheckoutForm;
