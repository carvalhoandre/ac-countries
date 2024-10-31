import React from "react";
import { useParams } from "react-router-dom";

import { ICountrie } from "../../types/countries";

import useCountries from "../../hooks/countries";

import { fontWeight } from "../../styles/theme";

import { Header, Footer, Loader, Typography } from "../../components";
import {
  LineChart,
  PieChart,
  Informations,
  MapCountrie,
  AreaChart,
} from "./components";

import * as styles from "./styles";

const Details = (): JSX.Element => {
  const { countrieName } = useParams<{ countrieName: string }>();
  const { searchCountriesByName } = useCountries();

  const [countrie, setCountrie] = React.useState<ICountrie | null>(null);
  const [loading, setLoading] = React.useState(false);

  const formatCountryName = (name: string) => {
    const formattedName = name.replace(/-/g, " ");
    return formattedName.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  React.useEffect(() => {
    const fetchData = async () => {
      if (!countrieName) return;

      setLoading(true);

      const formattedCountrieName = formatCountryName(countrieName);

      const newCountrie = await searchCountriesByName(formattedCountrieName);

      setCountrie(newCountrie[0]);

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading || !countrie) return <Loader $isFullScreen />;

  return (
    <>
      <Header hasGoBack />

      <styles.Content>
        <styles.Container>
          <styles.Line>
            <styles.FlagImage
              src={countrie?.flags.svg}
              alt={countrie?.flags.alt}
            />

            <Typography
              $weight={fontWeight.extraBold}
              size="xl"
              $textAlign="center"
            >
              {countrie?.name.official}
            </Typography>
          </styles.Line>

          <Informations countrie={countrie} />

          <Typography $weight={fontWeight.medium} size="xl" $textAlign="center">
            Localização:
          </Typography>

          <MapCountrie
            position={{
              lat: countrie?.latlng[0] || 0,
              lng: countrie?.latlng[1] || 0,
            }}
          />

          <styles.DashboardContainer>
            <styles.ChartSection>
              <Typography size="lg" $textAlign="center">
                Indicadores Demográficos
              </Typography>

              <LineChart
                name={countrie.name.official}
                population={countrie.population}
                area={countrie.area}
              />
            </styles.ChartSection>

            <styles.ChartSection>
              <Typography size="lg" $textAlign="center">
                Distribuição de Moeda e Idioma
              </Typography>

              <PieChart
                currencies={Object.values(countrie.currencies).map(
                  (currency) => currency.name
                )}
                languages={Object.values(countrie.languages)}
              />
            </styles.ChartSection>

            <styles.ChartSection>
              <Typography size="lg" $textAlign="center">
                Distribuição de Área e População
              </Typography>

              <AreaChart
                name={countrie.name.official}
                population={countrie.population}
                area={countrie.area}
              />
            </styles.ChartSection>
          </styles.DashboardContainer>
        </styles.Container>

        <Footer />
      </styles.Content>
    </>
  );
};

export default Details;
