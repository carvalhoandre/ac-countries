import { useNavigate } from "react-router-dom";

import { IListProps } from "./types";

import { fontWeight } from "../../styles/theme";

import { Typography } from "../Typography";
import * as styles from "./styles";

export const List = ({ countries }: IListProps): JSX.Element => {
  const navigate = useNavigate();

  const navigateToDetails = (countrie: string) => {
    const countrySlug = countrie.replace(/ /g, "-");
    
    navigate(`/details/${countrySlug}`);
  };
  
  return (
    <styles.Column>
      {countries.map((countrie, index) => (
        <styles.Card key={index} onClick={() => navigateToDetails(countrie.name.official)}>
          <styles.Row>
            <Typography $weight={fontWeight.semiBold} size="bg">
              {countrie.name.official}
            </Typography>

            <styles.FlagImage
              src={countrie.flags.svg}
              alt={countrie.flags.alt}
            />
          </styles.Row>

          <styles.Row>
            {countrie?.capital && (
              <Typography size="md">
                {`Capital:  ${Object.values(countrie.capital).join(", ")}`}
              </Typography>
            )}

            {countrie?.capital && (
              <Typography size="md">
                {`Idiomas:  ${Object.values(countrie.languages).join(", ")}`}
              </Typography>
            )}
          </styles.Row>

          <styles.Row>
            {Object.keys(countrie?.currencies || {}).map((currencyCode) => (
              <Typography size="md" key={currencyCode}>
                Moeda: {countrie?.currencies?.[currencyCode]?.name} (
                {countrie?.currencies?.[currencyCode]?.symbol})
              </Typography>
            ))}

            {countrie.population && (
              <Typography size="md">
                População {countrie.population}
              </Typography>
            )}
          </styles.Row>
        </styles.Card>
      ))}
    </styles.Column>
  );
};
