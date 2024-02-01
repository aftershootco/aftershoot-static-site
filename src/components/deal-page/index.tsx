// import cn from "cn";
"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import siteIcon from "./components/icons/Logo.png";
import checkGreenIcon from "./components/icons/check-green.svg";
import crossRedIcon from "./components/icons/cross-red.svg";
import pricingData from "./data/pricing-data";

const PricingBanner = () => {
  const searchParams = useSearchParams();
  const userEmail = searchParams.get("email");

  // console.log(userEmail);

  const handleSitelogoClick = () => {
    const redirectURL = "http://aftershoot.com";
    window.location.href = redirectURL;
  };

  const handlePricingButtonClick = (productId: string) => {
    if (!userEmail) {
      console.log("user email not found");
      return;
    }
    const stripLink = `https://us-central1-aftershoot-co.cloudfunctions.net/offer-banner?email=${userEmail}&product-id=${productId}`;
    window.location.href = stripLink;
  };

  return (
    <div>
      <div
        className="font-erode-variable min-h-screen bg-[#0D0D0D] py-[40px]  text-white md:pt-[60px]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 81.77%), url(<path-to-image>), lightgray -233.596px 0px / 112.593% 100% no-repeat",
        }}
      >
        <div className="flex justify-center">
          <button onClick={handleSitelogoClick} className="">
            <Image src={siteIcon} alt="aftershoot" width={175} />
          </button>
        </div>

        <h1 className="mx-auto mt-24 w-full max-w-[780px] px-6 text-center text-[52px] leading-[52px] tracking-[-1.56px] md:text-[88px] md:leading-[88px] md:tracking-[-2.56px]">
          Grab Your 25% Discount Now
        </h1>

        <div className=" mx-auto my-32 grid w-full max-w-[87rem] flex-wrap gap-4 px-4 text-black sm:grid-cols-2 md:px-4 lg:flex">
          {pricingData.map((pricing) => (
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
                  ${pricing.originalPrice}
                </div>
                {/* <div className="line-through text-[34px] leading-[44px] text-[#8E8E8E] mb-3 font-normal">
                  ${pricing.originalPrice}
                </div> */}
              </div>

              <div className="font-archivo font-light tracking-[0.16px] text-[#8E8E8E]">
                {pricing.billType}{" "}
              </div>

              <button
                className="my-6 w-full  rounded-md bg-[#6599FF] py-4 font-archivo font-semibold tracking-wide text-white"
                onClick={() => handlePricingButtonClick(pricing.productId)}
              >
                Claim the Deal
              </button>

              <div className="space-y-3 font-archivo">
                {pricing.features.map((feature) => (
                  <div key={feature.id} className="flex items-start gap-3">
                    <Image
                      src={feature.include ? checkGreenIcon : crossRedIcon}
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
          ))}
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default PricingBanner;
