import axios from "axios";

const API_UTL = "https://api.aftershoot.ai/stripe-custom-api/get-client-secret";

export type TData = {
  success: boolean;
  client_secret: string;
};

const getStripeClientSecrete = async (email: string) => {
  const data = {
    email: email,
  };

  try {
    const response = await axios.post(API_UTL, data);
    return response.data as TData;
  } catch (error) {
    console.log("Error in getStripeClientSecrete", error);
    return null;
  }
};

export default getStripeClientSecrete;
