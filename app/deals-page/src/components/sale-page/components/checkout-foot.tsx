import PowerByStripe from "@/components/ui/icons/power-by-stripe";
import { cn } from "@/utils/cn";

const links = [
  {
    id: "1",
    name: "Terms",
    url: "https://aftershoot.com/terms-of-use/",
  },
  {
    id: "2",
    name: "Privacy",
    url: "https://aftershoot.com/privacy-policy/",
  },
  // {
  //   id: "3",
  //   name: "Refunds",
  //   url: "/refunds",
  // },
];

const CheckoutFoot = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "mt-8 flex items-center justify-between gap-4",
        className && className,
      )}
    >
      <div className="space-x-3">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            className="text-xs font-semibold tracking-[0.24px] text-suvaGrey"
          >
            {link.name}
          </a>
        ))}
      </div>
      <PowerByStripe />
    </div>
  );
};

export default CheckoutFoot;
