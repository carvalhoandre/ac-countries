import { IInformationProps } from "./types";

import { formatNumber } from "../../../../helpers/numbers";

import Information from "../Information";

import * as styles from "./styles";

const Informations = ({ countrie }: IInformationProps): JSX.Element => {
  const coins = Object.keys(countrie?.currencies || {}).map(
    (currencyCode) =>
      `${countrie?.currencies?.[currencyCode]?.name} - ${countrie?.currencies?.[currencyCode]?.symbol}`
  );

  return (
    <styles.Container>
      <Information
        title="População:"
        text={formatNumber(countrie.population)}
      />

      <Information title="Área:" text={`${formatNumber(countrie.area)} km²`} />

      <Information title="Capital:" text={countrie.capital.join(", ")} />

      <Information title="Continente:" text={countrie.continents.join(", ")} />

      <Information
        title="Línguas:"
        text={Object.values(countrie.languages).join(", ")}
      />

      <Information title="Moedas:" text={`${coins.map((coin) => coin)}`} />
    </styles.Container>
  );
};

export default Informations;
