// import BillTypeToggle from "./components/bill-type-toggle";
import BillTypeToggle from "./components/bill-type-toggle";
import PageTitle from "./components/page-title";
import PricingCard from "./components/pricing-card";
import SiteTitle from "./components/site-title";
import pricingData from "./data/pricing-data";

const PricingBanner = () => {
  return (
    <div>
      <div
        className="font-erode-variable min-h-screen bg-[#0D0D0D] py-[40px]  text-white md:pt-[60px]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 81.77%), url(<path-to-image>), lightgray -233.596px 0px / 112.593% 100% no-repeat",
        }}
      >
        <SiteTitle />

        <BillTypeToggle />

        <PageTitle />

        <div className=" mx-auto my-32 grid w-full max-w-[87rem] flex-wrap gap-4 px-4 text-black sm:grid-cols-2 md:px-4 lg:flex">
          {pricingData.map((pricing) => (
            <PricingCard key={pricing.id} pricing={pricing} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingBanner;
