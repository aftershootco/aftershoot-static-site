import { pricingDataProps } from "@/components/sale-page/data/pricing-data";
import { create } from "zustand";

type TState = {
  selectedPlan: pricingDataProps | null;
  billingPeriod: "monthly" | "yearly";
};

type TActions = {
  setSelectedPlan: (plan: pricingDataProps | null) => void;
  toggleBillingPeriod: () => void;
};

type TPlanState = TState & TActions;

const usePlanState = create<TPlanState>((set) => ({
  selectedPlan: null,
  setSelectedPlan: (plan) => set(() => ({ selectedPlan: plan })),

  billingPeriod: "monthly",
  toggleBillingPeriod: () =>
    set((state) => ({
      billingPeriod: state.billingPeriod === "monthly" ? "yearly" : "monthly",
    })),
}));

export default usePlanState;
