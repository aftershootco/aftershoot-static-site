import { create } from "zustand";

type TState = {
  billingPeriod: "monthly" | "annually";
};

type TActions = {
  updateBillingPeriod: (string: "monthly" | "annually") => void;
};

type TPlanState = TState & TActions;

const usePricingState = create<TPlanState>((set) => ({
  billingPeriod: "annually",
  updateBillingPeriod: (string) =>
    set((state) => ({
      billingPeriod: string,
    })),
}));

export default usePricingState;
