"use client";

import AppIcons from "@/assets/icons";

type BackButtonProps = {
  onClick: () => void;
};

const BackButton = (props: BackButtonProps) => {
  const { onClick } = props;

  return (
    <button className="flex items-center gap-1" onClick={onClick}>
      <AppIcons.CheveronLeftIcon /> Back
    </button>
  );
};

export default BackButton;
