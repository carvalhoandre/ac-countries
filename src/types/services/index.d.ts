import { ICountrie } from "../countries";

export interface IGetAllCountriesResponse {
  data: Array<ICountrie>;
  status: number;
  statusText: string;
}
