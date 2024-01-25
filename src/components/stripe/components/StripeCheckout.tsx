"use client";

import { Elements } from "@stripe/react-stripe-js";

import PaymentForm from "./PaymentForm";

import { loadStripe } from "@stripe/stripe-js";

const stripePublishKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!;

const stripePromise = loadStripe(stripePublishKey);

const StripeCheckout = () => {
  return (
    <div>
      <Elements
        stripe={stripePromise}
        options={{
          clientSecret:
            "seti_1OcPYrCYznn1uZfNAWlNdbtM_secret_PRI9YmyKY9diWHclGAwLIY1UvEqIesy",
        }}
      >
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default StripeCheckout;
