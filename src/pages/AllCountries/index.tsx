import React from "react";

import useCountries from "../../hooks/countries";

import { fontWeight } from "../../styles/theme";

import { Header, Footer, Loader, List, Typography } from "../../components";
import { Search } from "./components/Search";

import * as styles from "./styles";
import { ICountrie } from "../../types/countries";

const AllCountries = () => {
  const { fechCountries } = useCountries();

  const [loading, setLoading] = React.useState(false);
  const [countries, setCountries] = React.useState<Array<ICountrie>>([]);
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
    const fetchData = async () => {
      if (countries.length > 0) return;

      setLoading(true);

      const newCountrie = await fechCountries();

      setCountries(newCountrie);

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading || viewCountries.length < 1) return <Loader $isFullScreen />;

  return (
    <>
      <Header />

      <styles.Content>
        <styles.Container>
          <Typography
            $weight={fontWeight.extraBold}
            size="xl"
            $textAlign="center"
          >
            Descubra Novos países
          </Typography>

          <Search onChange={setSearch} />

          <List countries={viewCountries} />
        </styles.Container>

        <Footer />
      </styles.Content>
    </>
  );
};

export default AllCountries;
