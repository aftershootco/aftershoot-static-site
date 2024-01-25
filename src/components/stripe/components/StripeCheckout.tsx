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
            "seti_1OcS2HCYznn1uZfNj4YBW2ch_secret_PRKht87XHN1uZL1djSQnFiSYwOfAxS4",
        }}
      >
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default StripeCheckout;
