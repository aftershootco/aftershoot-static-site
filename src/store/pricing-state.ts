import { create } from "zustand";

type TState = {
  billingPeriod: "monthly" | "annually";
};

type TActions = {
  toggleBillingPeriod: () => void;
};

type TPlanState = TState & TActions;

const usePricingState = create<TPlanState>((set) => ({
  billingPeriod: "monthly",
  toggleBillingPeriod: () =>
    set((state) => ({
      billingPeriod: state.billingPeriod === "monthly" ? "annually" : "monthly",
    })),
}));

export default usePricingState;
