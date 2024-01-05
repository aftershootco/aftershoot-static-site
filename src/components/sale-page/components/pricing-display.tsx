import { cn } from "@/utils/cn";

type PriceDisplayProps = {
  price?: number;
  className?: string;
};

const PriceDisplay = (props: PriceDisplayProps) => {
  const { price = 0, className } = props;

  return (
    <div className={cn(className && className)}>
      <div className="flex items-end gap-2">
        <div className="text-[45px] font-medium leading-[60px]">${price}</div>
        <div className="text-[20px] leading-[34px] text-suvaGrey">/mo</div>
      </div>
      <p className="text-[15.15px] tracking-[0.302px] text-[#323232]">
        Billed Annually
      </p>
    </div>
  );
};

export default PriceDisplay;
