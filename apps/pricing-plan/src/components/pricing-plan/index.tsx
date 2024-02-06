// import BillTypeToggle from "./components/bill-type-toggle";
import BillTypeToggle from "./components/bill-type-toggle";
import ComponentContianer from "./components/component-container";
import PageTitle from "./components/page-title";
import PricingCardList from "./components/pricing-card-list";
import SiteTitle from "./components/site-title";

const PricingBanner = () => {
  return (
    <ComponentContianer>
      <SiteTitle />
      <BillTypeToggle />
      <PageTitle />
      <PricingCardList />
    </ComponentContianer>
  );
};

export default PricingBanner;
