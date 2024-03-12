import { IInformationProps } from "./types";

import { fontWeight } from "../../../../styles/theme";
import { formatNumber } from "../../../../helpers/numbers";

import { Typography } from "../../../../components";
import * as styles from "./styles";

export const Information = ({ countrie }: IInformationProps): JSX.Element => {
  return (
    <styles.Container>
      <Typography $weight={fontWeight.medium}>
        Informações Principais:
      </Typography>

      <Typography>População: {formatNumber(countrie.population)}</Typography>

      <Typography>Área: {formatNumber(countrie.area)} km²</Typography>

      <Typography>Capital: {countrie.capital.join(", ")}</Typography>

      <Typography>Continente: {countrie.continents.join(", ")}</Typography>

      <Typography>
        Línguas: {Object.values(countrie.languages).join(", ")}
      </Typography>

      <Typography>
        Moedas:{" "}
        {Object.values(countrie)
          .filter(
            (value: any) => typeof value === "object" && "symbol" in value
          )
          .map((value: any) => value.symbol)
          .join(", ")}
      </Typography>
    </styles.Container>
  );
};
