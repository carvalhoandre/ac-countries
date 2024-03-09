import React from "react";

import { ICountrie } from "../../../../types/countries";

import { Typography } from "../../../../components/Typography";

import { Table, Search, List } from "./components";
import * as styles from "./styles";

const Countries = (): JSX.Element => {
  const [countries, setCountries] = React.useState<Array<ICountrie> | []>([]);
  const [view, setView] = React.useState<"card" | "table">("table");

  const hasCountries = countries.length > 0;

  const handleUpdateView = (newView: "card" | "table") => {
    if (newView === view) return;

    setView(newView);
  }

  return (
    <styles.Container>
      <Search onChange={setCountries} />

      <styles.IconsContainer>
        <Typography size="md" $weight={500}>
          Visualização
        </Typography>

        <div onClick={() => handleUpdateView('table')}>
          <styles.Icon selected={view === 'table'}>
            <i className="uil-list-ul" />
            <Typography size="sm">Tabela</Typography>
          </styles.Icon>
        </div>

        <div onClick={() => handleUpdateView('card')}>
          <styles.Icon selected={view === 'card'}>
            <i className="uil-card-atm" />
            <Typography size="sm">Card</Typography>
          </styles.Icon>
        </div>
      </styles.IconsContainer>

      {hasCountries &&  view === 'table' ?  <Table countries={countries} /> : <List countries={countries} />}
    </styles.Container>
  );
};

export default Countries;
