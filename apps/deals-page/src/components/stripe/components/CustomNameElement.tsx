import { useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";

type TCustomNameElement = {
  value: string;
  handleChange: (name: string) => void;
};

const CustomNameElement = (props: TCustomNameElement) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleChange(e.target.value);
  };

  useEffect(() => {}, [elements, stripe]);

  return (
    <div>
      <input
        className="w-full rounded-md border border-suvaGrey  p-4 text-lg focus:outline-none"
        placeholder="Name on card"
        value={props.value}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default CustomNameElement;
