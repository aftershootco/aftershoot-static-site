import { cn } from "@/utils/cn";
import * as Switch from "@radix-ui/react-switch";
import APP_COLORS from "../constant/app-color";

type ToggleSwitchProps = {
  color?: string;
  labelBefore?: string;
  labelAfter?: string;
  className?: string;
  onToggle: () => void;
};

const ToggleSwitch = (props: ToggleSwitchProps) => {
  const {
    color = APP_COLORS.CORNFLOWERBLUE,
    labelBefore = "Lable",
    labelAfter = "",
    className,
    onToggle,
  } = props;

  const bgColor = ``;

  return (
    <div className={cn("flex items-center gap-2", className && className)}>
      <label className=" text-[15px] leading-none" htmlFor="airplane-mode">
        {labelBefore}
      </label>
      <Switch.Root
        className={cn(
          "w-[36px] h-[18px] bg-suvaGrey/35 rounded-full relative shadow-[1px] data-[state=checked]:bg-cornflowerBlue  outline-none cursor-default",
          color && bgColor
        )}
        id="airplane-mode"
        // style={{ "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)" }}
        onCheckedChange={(e) => onToggle()}
      >
        <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </Switch.Root>

      <label
        className=" text-[15px] leading-none pr-[15px]"
        htmlFor="airplane-mode"
      >
        {labelAfter}
      </label>
    </div>
  );
};

export default ToggleSwitch;
