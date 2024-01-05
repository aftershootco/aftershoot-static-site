// import cn from "cn";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import pricingData from "../constant/pricing-data";
import siteIcon from "./components/icons/Logo.png";
import checkGreenIcon from "./components/icons/check-green.svg";
import crossRedIcon from "./components/icons/cross-red.svg";

const PricingBanner = () => {
  const searchParams = useSearchParams();
  const userEmail = searchParams.get("email");

  // console.log(userEmail);

  const handleSitelogoClick = () => {
    const redirectURL = "http://aftershoot.com/holiday-offer";
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
        className="min-h-screen bg-[#0D0D0D] py-[40px] font-erode-variable  md:pt-[60px] text-white"
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

        <h1 className="mt-24 text-[52px] md:text-[88px] tracking-[-1.56px] md:tracking-[-2.56px] px-6 leading-[52px] md:leading-[88px] text-center w-full mx-auto max-w-[780px]">
          Start Your 30 Days Free Trial Now{" "}
          <span className="text-[#F60]">📸</span>
        </h1>

        <div className=" grid sm:grid-cols-2 lg:flex gap-4 w-full max-w-[87rem] mx-auto text-black my-32 flex-wrap px-4 md:px-4">
          {pricingData.map((pricing) => (
            <div
              key={pricing.id}
              className={cn(
                "bg-white p-6 border-[5px] border-t-0 border-transparent shrink-0 flex-1 relative ",
                pricing.highlight &&
                  "border-[#F60] bg-[#FAF pt-[58px] lg:pt-6 bg-[#FAF7F2]",
              )}
            >
              {/* best buy */}
              {pricing.highlight && (
                <div className="absolute top-0 -right-[5px] -left-[5px] py-3 bottom-auto font-archivo tracking-[3.6px] font-medium text-white uppercase bg-[#F60] p-2 text-center text-xs lg:-top-9">
                  Best Value
                </div>
              )}

              <h2 className="text-[40px] leading-[44px] font-normal">
                {pricing.pricingName}
              </h2>
              <p className="font-archivo text-[14px] shrink-0 h-6">
                {pricing.description}{" "}
              </p>

              <div className="flex gap-2 mt-4 font-archivo items-end -tracking-[1.2px]">
                <div className="text-[60px] leading-[81px] font-semibold">
                  ${pricing.originalPrice}
                </div>
                {/* <div className="line-through text-[34px] leading-[44px] text-[#8E8E8E] mb-3 font-normal">
                  ${pricing.originalPrice}
                </div> */}
              </div>

              <div className="font-archivo text-[#8E8E8E] tracking-[0.16px] font-light">
                {pricing.billType}{" "}
              </div>

              <button
                className="w-full tracking-wide  my-6 text-white font-semibold bg-[#6599FF] py-4 rounded-md font-archivo"
                onClick={() => handlePricingButtonClick(pricing.productId)}
              >
                Start Free Trial
              </button>

              <div className="font-archivo space-y-3">
                {pricing.features.map((feature) => (
                  <div key={feature.id} className="flex gap-3 items-start">
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
