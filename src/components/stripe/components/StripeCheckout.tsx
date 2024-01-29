"use client";

import { Elements } from "@stripe/react-stripe-js";

import PaymentForm from "./PaymentForm";

import { loadStripe } from "@stripe/stripe-js";

const stripePublishKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!;

const stripePromise = loadStripe(stripePublishKey);

import useStripeClientSecrete from "../hooks/useClientSecrete";

const StripeCheckout = () => {
  const { stripeClientSecrete } = useStripeClientSecrete(
    "arvind@aftershoot.com",
  );

  // console.log(stripeClientSecrete);
  if (!stripeClientSecrete) {
    return null;
  }

  const { success, client_secret } = stripeClientSecrete;

  // console.log(success, client_secret);

  return (
    <div>
      <Elements
        stripe={stripePromise}
        options={{
          clientSecret: client_secret,
        }}
      >
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default StripeCheckout;
