import { cn } from "@/utils/cn";
import * as Switch from "@radix-ui/react-switch";
import APP_COLORS from "../../constant/app-color";

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
          "relative h-[18px] w-[36px] cursor-default rounded-full bg-suvaGrey/35 shadow-[1px]  outline-none data-[state=checked]:bg-cornflowerBlue",
          color && bgColor,
        )}
        id="airplane-mode"
        // style={{ "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)" }}
        onCheckedChange={(e) => onToggle()}
      >
        <Switch.Thumb className="block h-[15px] w-[15px] translate-x-0.5 rounded-full bg-white transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </Switch.Root>

      <label
        className=" pr-[15px] text-[15px] leading-none"
        htmlFor="airplane-mode"
      >
        {labelAfter}
      </label>
    </div>
  );
};

export default ToggleSwitch;
