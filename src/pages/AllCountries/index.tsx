import React from "react";

import useCountries from "../../hooks/countries";

import { fontWeight } from "../../styles/theme";

import { Header, Footer, Loader, List, Typography } from "../../components";
import { Search } from "./components/Search";

import * as styles from "./styles";

const AllCountries = () => {
  const { countries, loading, fechCountries } = useCountries();

  const [search, setSearch] = React.useState("");

  const filteredCountries =
    search.length > 0
      ? countries.filter(
          (countrie) =>
            countrie.name.common.toUpperCase().includes(search.toUpperCase()) ||
            countrie.name.official.toUpperCase().includes(search.toUpperCase())
        )
      : [];

  let viewCountries =
    filteredCountries.length > 0 ? filteredCountries : countries;

  React.useEffect(() => {
    fechCountries();
  }, []);

  return (
    <>
      <Header />

      <styles.Content>
        <styles.Container>
          <Typography $weight={fontWeight.extraBold} size="xl" $textAlign="center">
            Descubra Novos países
          </Typography>

          {loading && viewCountries.length < 1 ? (
            <Loader />
          ) : (
            <>
              <Search onChange={setSearch} />
              
              <List countries={viewCountries} />
            </>
          )}
        </styles.Container>

        <Footer />
      </styles.Content>
    </>
  );
};

export default AllCountries;
