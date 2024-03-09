import axios from "axios";
import { IGetAllCountriesResponse } from "../types/services";

const API_URL = "https://restcountries.com/v3.1";

export const getAllCountries = async (): Promise<IGetAllCountriesResponse> => {
  try {
    return await axios.get(`${API_URL}/all`);
  } catch (e: any) {
    throw new Error(e);
  }
};
