import AppIcons from "@/assets/icons";

const PromocodeInput = () => {
  return (
    <div className="mt-6 flex items-center gap-2 rounded-md border border-[#F2F2F2] bg-white  pl-[18px] text-sm font-light shadow-sm">
      <AppIcons.CouponIcon />
      <input
        className="h-full w-full py-[18px]"
        placeholder="Promo code (optional)"
      />
      <button className="h-full border-l border-[#F2F2F2]  p-[18px] active:bg-[#f6f6f6ad] ">
        Apply
      </button>
    </div>
  );
};

export default PromocodeInput;
