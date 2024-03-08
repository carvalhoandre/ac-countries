import React from 'react'

import Header from "../../components/Header";
import useCountries from '../../hooks/countries';

const Countries = (): JSX.Element => {
  const { countries, fechCountries } = useCountries();

  React.useEffect(() => {
    if (!countries) fechCountries();
  }, []);

  return <Header />;
};

export default Countries;
