import React from "react";

import axios from "axios";
import { toast } from "react-toastify";
import { getAllCountries } from "../../services/countries";

const useCountries = () => {
  const [loading, setLoading] = React.useState(false);
  const [countries, setCountries] = React.useState(false);

  const fechCountries = async () => {
    setLoading(true);

    try {
      const response = await getAllCountries();

      if (axios.isAxiosError(response)) throw new Error();

      console.log(response);

      setCountries(response.data.data);
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

  return {
    countries,
    loading,
    fechCountries,
  };
};

export default useCountries;
