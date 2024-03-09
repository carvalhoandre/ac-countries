import React from "react";

import useCountries from "../../hooks/countries";

import Header from "../../components/Header";
import { Typography } from "../../components/Typography";

import Table from "./components/Table";
import * as styles from "./styles";

const Countries = (): JSX.Element => {
  const { countries, fechCountries } = useCountries();

  const hasnotCountries = !countries || countries.length === 0;

  React.useEffect(() => {
   if(hasnotCountries) fechCountries();
  }, []);

  return (
    <>
      <Header />

      <styles.TitleContainer>
        <Typography $weight={600} size="xl">
          Países
        </Typography>
        <Typography $weight={300} size="md">
          Explore o mundo
        </Typography>
      </styles.TitleContainer>

      <Table countries={countries} />
    </>
  );
};

export default Countries;
