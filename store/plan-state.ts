import { pricingDataProps } from "@/components/sale-page/data/pricing-data";
import { create } from "zustand";

type TState = {
  selectedPlan: pricingDataProps | null;
};

type TActions = {
  setSelectedPlan: (plan: pricingDataProps | null) => void;
};

type TPlanState = TState & TActions;

const usePlanState = create<TPlanState>((set) => ({
  selectedPlan: null,
  setSelectedPlan: (plan) => set(() => ({ selectedPlan: plan })),
}));

export default usePlanState;
