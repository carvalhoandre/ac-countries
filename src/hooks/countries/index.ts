import React from "react";

import { toast } from "react-toastify";

import { getAllCountries, getCountriesByName } from "../../services/countries";

import { ICountrie } from "../../types/countries";

const useCountries = () => {
  const [loading, setLoading] = React.useState(false);
  const [countries, setCountries] = React.useState<Array<ICountrie>>([]);

  const fechCountries = async ():Promise<void> => {
    setLoading(true);

    try {
      const response = await getAllCountries();

      if (response.status !== 200)  throw new Error();
      
      setCountries(response.data);
    } catch {
      toast("Error ao buscar países", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 1,
      });
    } finally {
      setLoading(false);
    }
  };

  const searchCountriesByName = async (name:string):Promise<Array<ICountrie> | []> => {
    setLoading(true);

    try {
      const response = await getCountriesByName(name);

      if (response.status !== 200 || response.data.length === 0) throw new Error();
      
      return response.data
    } catch {
      toast("Error ao buscar países", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 1,
      });

      return []
    } finally {
      setLoading(false);
    }
  };

  return {
    countries,
    loading,
    fechCountries,
    searchCountriesByName
  };
};

export default useCountries;
