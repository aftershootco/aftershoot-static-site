import axios from "axios";

const API_URL = "https://api.aftershoot.ai/stripe-custom-api/start-now";

export type TData = {
  message: string;
  success: boolean;
};

const startTrial = async (clientid: string, priceid: string) => {
  const data = {
    clientid,
    priceid,
  };

  try {
    const response = await axios.post(API_URL, data);
    console.log("RES", response);
    return response.data as TData;
  } catch (error) {
    console.log("Error in startTrial", error);
    return null;
  }
};

export default startTrial;
