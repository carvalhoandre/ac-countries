import axios from "axios";

const API_URL = "https://restcountries.com/v3.1";

export const getAllCountries = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);

    return response;
  } catch (e: any) {
    return e;
  }
};
