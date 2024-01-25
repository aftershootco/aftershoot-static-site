import { AmexIcon, JCBIcon, MasterCardIcon, VisaIcon } from "@/assets/icons";
import StripeCheckoutForm from "@/components/stripe/components/StripeCheckout";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const CardIcons: { [key: string]: string | StaticImport } = {
  visa: VisaIcon,
  mastercard: MasterCardIcon,
  amex: AmexIcon,
  jcb: JCBIcon,
};

const CheckoutFormContainer = () => {
  return (
    <div className="mx-auto max-w-[450px] flex-1 rounded-lg bg-white p-4 shadow-md sm:p-8">
      <div className="flex items-center justify-between gap-2 ">
        <div className="text-2xl font-bold">Card Info</div>
      </div>

      <StripeCheckoutForm />

      {/* <p className="text-xs tracking-[0.24px] text-suvaGrey">
        By confirming your subscription, you allow AfterShoot Inc. to charge
        your card for this payment and future payments in accordance with their
        terms. You can always cancel your subscription.
      </p> */}
    </div>
  );
};

export default CheckoutFormContainer;
