import { useNavigate } from "react-router-dom";
import { IListProps } from "./types";
import { formatNumber } from "../../helpers/numbers";
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
        <styles.Card
          key={`${index}-${countrie.id}`}
          onClick={() => navigateToDetails(countrie.name.official)}
        >
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
              <styles.Information>
                <Typography size="md" $weight={fontWeight.medium}>
                  Capital:
                </Typography>
                <Typography size="md">
                  {Object.values(countrie.capital).join(", ")}
                </Typography>
              </styles.Information>
            )}
            {countrie?.capital && (
              <styles.Information>
                <Typography size="md" $weight={fontWeight.medium}>
                  Idiomas:
                </Typography>
                <Typography size="md">
                  {Object.values(countrie.languages).join(", ")}
                </Typography>
              </styles.Information>
            )}
          </styles.Row>

          <styles.Row>
            <styles.Information>
              <Typography size="md" $weight={fontWeight.medium}>
                Moeda:
              </Typography>
              {Object.keys(countrie?.currencies || {}).map((currencyCode) => (
                <Typography size="md" key={currencyCode}>
                  {countrie?.currencies?.[currencyCode]?.name} (
                  {countrie?.currencies?.[currencyCode]?.symbol})
                </Typography>
              ))}
            </styles.Information>
            {countrie.population && (
              <styles.Information>
                <Typography size="md" $weight={fontWeight.medium}>
                  População:
                </Typography>
                <Typography size="md">
                  {formatNumber(countrie.population)}
                </Typography>
              </styles.Information>
            )}
          </styles.Row>
        </styles.Card>
      ))}
    </styles.Column>
  );
};
