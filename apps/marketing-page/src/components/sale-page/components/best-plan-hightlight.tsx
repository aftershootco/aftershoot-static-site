type BestPlanHightlightProps = {
  hide: boolean;
};

const BestPlanHightlight = (props: BestPlanHightlightProps) => {
  if (props.hide) {
    return null;
  }

  return (
    <div className="absolute right-1 top-1 w-max rounded-md bg-[#F16507] px-3 py-2 font-archivo text-[10px] uppercase tracking-[3px] text-white md:right-6 md:top-6">
      Best Value
    </div>
  );
};

export default BestPlanHightlight;
