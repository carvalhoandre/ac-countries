import React from "react";

import { ICountrie } from "../../../../types/countries";

import { Table, Search } from "./components";
import * as styles from "./styles";

const Countries = (): JSX.Element => {
  const [countries, setCountries] = React.useState<Array<ICountrie> | []>([]);


  const hasCountries = countries.length > 0;

  return (
    <styles.Container>
      <Search onChange={setCountries} />

      {hasCountries && <Table countries={countries} />}
    </styles.Container>
  );
};

export default Countries;
