"use client";

import StripeCheckout from "@/components/stripe/components/StripeCheckout";

const CheckoutFormContainer = () => {
  return (
    <div className="mx-auto max-w-[450px] flex-1 rounded-lg bg-white p-4 shadow-md sm:p-8">
      <div className="flex items-center justify-between gap-2 ">
        <div className="text-2xl font-bold">Card Info</div>
      </div>

      <StripeCheckout />
    </div>
  );
};

export default CheckoutFormContainer;
