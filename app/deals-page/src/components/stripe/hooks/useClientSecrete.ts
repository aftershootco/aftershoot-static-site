import useSWR from "swr";
import getStripeClientSecret from "../handler/getStripeClientSecret";

function useStripeClientSecret(email: string) {
  const { data, error, isLoading } = useSWR(
    `/api/stripe/get-client-secret`,
    () => getStripeClientSecret(email),
  );

  return {
    stripeClientSecret: data,
    isStripeClientSecretLoading: isLoading,
    isStripeClientSecretError: error,
  };
}

export default useStripeClientSecret;
