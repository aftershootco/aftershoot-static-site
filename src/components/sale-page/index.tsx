"use client";

import { useCallback, useState } from "react";
import AppContainer from "../ui/site/app-containr";
import CheckoutInfo from "./components/checkout-info";
import PricingPlansInfo from "./components/pricing-plans-info";
import { pricingDataProps } from "./data/pricing-data";

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState<pricingDataProps | null>(
    null,
  );

  const handlePlanSelection = useCallback((plan: pricingDataProps) => {
    setSelectedPlan(plan);
  }, []);

  return (
    <AppContainer>
      <PricingPlansInfo />
      <CheckoutInfo />
    </AppContainer>
  );
};

export default Index;
