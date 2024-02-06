"use client";

import AppIconComponent from "@/components/ui/icons";

type BackButtonProps = {
  onClick: () => void;
};

const BackButton = (props: BackButtonProps) => {
  const { onClick } = props;

  return (
    <button
      className="flex items-center gap-1 rounded-md border px-2 py-1 transition-all duration-100 active:border-suvaGrey/60"
      onClick={onClick}
    >
      <AppIconComponent.CheveronLeftIcon /> Back
    </button>
  );
};

export default BackButton;
