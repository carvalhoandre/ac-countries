import { IListProps } from "./types";

import * as styles from "./styles";
import { Typography } from "../Typography";

export const List = ({ countries }: IListProps): JSX.Element => {
  const navigateToDetails = (countrie: string) => {
    const countryNames = countrie.split(" ");
    const firstCountryName = countryNames[0];
    window.location.href = `details/&${firstCountryName}`;
  };
  
  return (
    <styles.Column>
      {countries.map((countrie, index) => (
        <styles.Card key={index} onClick={() => navigateToDetails(countrie.name.official)}>
          <styles.Row>
            <Typography $weight={600} size="bg">
              {countrie.name.official}
            </Typography>

            <styles.FlagImage
              src={countrie.flags.svg}
              alt={countrie.flags.alt}
            />
          </styles.Row>

          <styles.Row>
            {countrie?.capital && (
              <Typography $weight={300} size="md">
                {`Capital:  ${Object.values(countrie.capital).join(", ")}`}
              </Typography>
            )}

            {countrie?.capital && (
              <Typography $weight={300} size="md">
                {`Idiomas:  ${Object.values(countrie.languages).join(", ")}`}
              </Typography>
            )}
          </styles.Row>

          <styles.Row>
            {Object.keys(countrie?.currencies || {}).map((currencyCode) => (
              <Typography $weight={300} size="md" key={currencyCode}>
                Moeda: {countrie?.currencies?.[currencyCode]?.name} (
                {countrie?.currencies?.[currencyCode]?.symbol})
              </Typography>
            ))}

            {countrie.population && (
              <Typography $weight={300} size="md">
                População {countrie.population}
              </Typography>
            )}
          </styles.Row>
        </styles.Card>
      ))}
    </styles.Column>
  );
};
