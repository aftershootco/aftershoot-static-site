import PowerByStripe from "@/assets/icons/power-by-stripe";

const links = [
  {
    id: "1",
    name: "Terms",
    url: "/terms",
  },
  {
    id: "2",
    name: "Privacy",
    url: "/privacy",
  },
  {
    id: "3",
    name: "Refunds",
    url: "/refunds",
  },
];

const CheckoutFoot = () => {
  return (
    <div className="mt-14 flex items-center justify-between gap-4">
      <div className="space-x-3">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
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
