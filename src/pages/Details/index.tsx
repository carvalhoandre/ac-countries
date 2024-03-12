import React from "react";
import { useParams } from "react-router-dom";

import { ICountrie } from "../../types/countries";

import useCountries from "../../hooks/countries";

import { fontWeight } from "../../styles/theme";

import { Header, Footer, Loader, Typography } from "../../components";
import LineChart from "./components/LineChart";

import * as styles from "./styles";

const Details = (): JSX.Element => {
  const { countrieName } = useParams<{ countrieName: string }>();
  const { loading, searchCountriesByName } = useCountries();
  const [countrie, setCountrie] = React.useState<ICountrie | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      if (!countrieName || !!countrie) return;

      const formattedCountrieName = countrieName.replace(/-/g, " ");

      const newCountrie = await searchCountriesByName(formattedCountrieName);

      setCountrie(newCountrie[0]);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />

      <styles.Content>
      {loading || !countrie ? (
          <Loader />
        ) : (
          <styles.Container>
            <styles.Line>
              <Typography $weight={fontWeight.extraBold} size="xl" $textAlign="center">
                {countrie?.name.official}
              </Typography>
              <styles.FlagImage
                src={countrie?.flags.svg}
                alt={countrie?.flags.alt}
              />
            </styles.Line>
            <LineChart countrie={countrie as ICountrie} />
          </styles.Container>
        )}
        <Footer />
      </styles.Content>
    </>
  );
};

export default Details;
