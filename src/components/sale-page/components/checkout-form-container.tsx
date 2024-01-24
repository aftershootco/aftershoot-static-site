import StripeCheckoutForm from "@/components/stripe/components/StripeCheckoutForm";

const CheckoutFormContainer = () => {
  return (
    <div className="max-w-[450px] flex-1 rounded-md bg-white shadow-xl">
      <div className="p-4">placeholder</div>

      <div>
        <div>Card Info</div>
        <div></div>
      </div>
      <StripeCheckoutForm />
    </div>
  );
};

export default CheckoutFormContainer;
