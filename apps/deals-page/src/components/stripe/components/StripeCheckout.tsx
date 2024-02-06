"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";
import PaymentForm from "./PaymentForm";

const stripePublishKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!;
const stripePromise = loadStripe(stripePublishKey);

import useStripeClientSecret from "../hooks/useClientSecrete";

const StripeCheckout = () => {
  const search = useSearchParams();
  const email = search.get("email");

  const { stripeClientSecret } = useStripeClientSecret(email!);

  // console.log(stripeClientSecrete);
  if (!stripeClientSecret?.client_secret) {
    return null;
  }

  const { success, client_secret } = stripeClientSecret;

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
