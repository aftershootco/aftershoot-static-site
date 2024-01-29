import { bgImg } from "@/assets/img";
import Image from "next/image";
import AppContainer from "../ui/site/app-containr";
import ActiveOverlay from "./components/active-overlay";
import CheckoutInfo from "./components/checkout-info";
import PricingPlansInfo from "./components/pricing-plans-info";

const Index = async () => {
  return (
    <div className="relative flex min-h-screen overflow-clip">
      <AppContainer className="my-auto ">
        <PricingPlansInfo />
      </AppContainer>

      <ActiveOverlay />
      <CheckoutInfo />
      <Image src={bgImg} alt="aftershoot" className="absolute inset-0 -z-10" />
    </div>
  );
};

export default Index;
