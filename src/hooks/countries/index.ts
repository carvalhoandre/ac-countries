import { toast } from "react-toastify";

import { getAllCountries, getCountriesByName } from "../../services/countries";

import { ICountrie } from "../../types/countries";

const useCountries = () => {
  const fechCountries = async (): Promise<Array<ICountrie> | []> => {
    try {
      const response = await getAllCountries();

      if (response.status !== 200) throw new Error();

      return response.data;
    } catch {
      toast("Error ao buscar países", { progress: 1 });

      return [];
    }
  };

  const searchCountriesByName = async (
    name: string
  ): Promise<Array<ICountrie> | []> => {
    try {
      const response = await getCountriesByName(name);

      if (response.status !== 200) throw new Error();

      return response.data;
    } catch (e: any) {
      toast(`Buscamos por ${name} e não encontramos países correspondentes`, {
        progress: 1,
      });

      return [];
    }
  };

  return {
    fechCountries,
    searchCountriesByName,
  };
};

export default useCountries;
