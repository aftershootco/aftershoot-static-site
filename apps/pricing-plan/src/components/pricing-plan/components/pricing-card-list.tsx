import pricingData from "../data/pricing-data";
import PricingCard from "./pricing-card";

const PricingCardList = () => {
  return (
    <div className=" mx-auto my-32 grid w-full max-w-[87rem] flex-wrap gap-4 px-4 text-black sm:grid-cols-2 md:px-4 lg:flex">
      {pricingData.map((pricing) => (
        <PricingCard key={pricing.id} pricing={pricing} />
      ))}
    </div>
  );
};

export default PricingCardList;
