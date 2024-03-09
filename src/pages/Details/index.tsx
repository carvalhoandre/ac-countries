import React from "react";
import { Header, Footer, Loader, Typography } from "../../components";
import LineChart from "./components/LineChart";

import * as styles from "./styles";
import useCountries from "../../hooks/countries";
import { ICountrie } from "../../types/countries";

const Details = () => {
  const { loading, searchCountriesByName } = useCountries();

  const [countrie, setCountrie] = React.useState<ICountrie | null>(null);

  const fechCountrie = async () => {
    const countrieName = window.location.pathname.split("&")[1];

    console.log(countrieName);
    if (countrieName.length < 1) return;

    const newCountrie = await searchCountriesByName(countrieName);

    setCountrie(newCountrie[0]);
  };

  React.useEffect(() => {
    fechCountrie();
  }, []);

  return (
    <>
      <Header />

      <styles.Content>
        {loading && !countrie ? (
          <Loader />
        ) : (
          <styles.Container>
            <styles.Line>
              <Typography $weight={800} size="xl" textAlign="center">
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
