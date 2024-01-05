"use client";

import { cn } from "@/utils/cn";
import usePlanState from "../../../../store/plan-state";

type ActiveOverlayProps = {
  handleClick?: () => void;
};

const ActiveOverlay = (props: ActiveOverlayProps) => {
  const { handleClick } = props;

  const plantState = usePlanState();

  const isPlanSelected = plantState.selectedPlan;

  return (
    <div
      onClick={() => plantState.setSelectedPlan(null)}
      className={cn(
        "pointer-events-none absolute inset-0 transition-all duration-1000",
        isPlanSelected && "pointer-events-auto bg-black/50",
      )}
    />
  );
};

export default ActiveOverlay;
