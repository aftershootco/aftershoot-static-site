import useSWR from "swr";
import getStripeClientSecrete from "../handler/getStripeClientSecrete";

function useStripeClientSecrete(email: string) {
  const fetcher = () => {
    return getStripeClientSecrete(email);
  };

  const { data, error, isLoading } = useSWR(
    `/api/stripe/get-client-secret`,
    fetcher,
  );

  return {
    stripeClientSecrete: data,
    isStripeClientSecreteLoading: isLoading,
    isStripeClientSecreteError: error,
  };
}

export default useStripeClientSecrete;
