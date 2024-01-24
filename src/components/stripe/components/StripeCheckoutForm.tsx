"use client";

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

      <button>Submit</button>
    </form>
  );
};

export default StripeCheckoutForm;
