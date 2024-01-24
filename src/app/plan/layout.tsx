"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

type TLayout = {
  children: React.ReactNode;
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  title: "Aftershoot marketing";
}) {
  return (
    <Elements stripe={stripePromise}>
      <div>{children}</div>;
    </Elements>
  );
}
