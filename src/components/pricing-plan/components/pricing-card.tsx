"use client";

import { dealIcons } from "@/assets/icons";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { pricingDataProps } from "../data/pricing-data";

type PricingCardProps = {
  pricing: pricingDataProps;
};

const PricingCard = (props: PricingCardProps) => {
  const { pricing } = props;

  const searchParams = useSearchParams();
  const userEmail = searchParams.get("email");

  const handlePricingButtonClick = (productKey: string) => {
    if (!userEmail) {
      console.log("user email not found");
      return;
    }

    const promoCode = "IMAGING24";

    // const link = `${productKey}=IMAGING24`;
    // "https://secure.aftershoot.com/b/28o2aU7ak9y68G400y?prefilled_promo_code=IMAGING24";
    // const stripLink = `https://us-central1-aftershoot-co.cloudfunctions.net/offer-banner?email=${userEmail}&product-id=${productId}`;

    const link = `https://secure.aftershoot.com/b/${productKey}?prefilled_promo_code=${promoCode}&prefilled_email=${userEmail}`;

    window.location.href = link;
  };

  return (
    <div
      key={pricing.id}
      className={cn(
        "relative flex-1 shrink-0 border-[5px] border-t-0 border-transparent bg-white p-6 ",
        pricing.highlight &&
          "bg-[#FAF border-[#F60] bg-[#FAF7F2] pt-[58px] lg:pt-6",
      )}
    >
      {/* best buy */}
      {pricing.highlight && (
        <div className="absolute -left-[5px] -right-[5px] bottom-auto top-0 bg-[#F60] p-2 py-3 text-center font-archivo text-xs font-medium uppercase tracking-[3.6px] text-white lg:-top-9">
          Best Value
        </div>
      )}

      <h2 className="text-[40px] font-normal leading-[44px]">
        {pricing.pricingName}
      </h2>
      <p className="h-6 shrink-0 font-archivo text-[14px]">
        {pricing.description}{" "}
      </p>

      <div className="mt-4 flex items-end gap-2 font-archivo -tracking-[1.2px]">
        <div className="text-[60px] font-semibold leading-[81px]">
          ${pricing.discountedPrice}
        </div>
        <div className="mb-3 text-[34px] font-normal leading-[44px] text-[#8E8E8E] line-through">
          ${pricing.originalPrice}
        </div>
      </div>

      <div className="font-archivo font-light tracking-[0.16px] text-[#8E8E8E]">
        {pricing.billType}{" "}
      </div>

      <button
        className="my-6 w-full  rounded-md bg-[#6599FF] py-4 font-archivo font-semibold tracking-wide text-white"
        onClick={() => handlePricingButtonClick(pricing.productKey)}
      >
        Claim the Deal
      </button>

      <div className="space-y-3 font-archivo">
        {pricing.features.map((feature) => (
          <div key={feature.id} className="flex items-start gap-3">
            <Image
              src={
                feature.include
                  ? dealIcons.checkGreenIcon
                  : dealIcons.crossRedIcon
              }
              className="mt-1"
              alt="aftershoot sale"
              width={16}
              height={16}
            />
            <h3
              className={cn(
                "font-light tracking-[0.16px;]",
                feature.bold && "font-bold",
              )}
            >
              {feature.featureName}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
