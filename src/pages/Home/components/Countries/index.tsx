import React from "react";

import { View } from "../ActionsIcon/types";
import { ICountrie } from "../../../../types/countries";

import { Table, Search, List } from "../../../../components";
import { Highlighted } from "../Highlighted";
import { ActionsIcon } from "../ActionsIcon";

import * as styles from "./styles";

export const Countries = (): JSX.Element => {
  const [countries, setCountries] = React.useState<Array<ICountrie> | []>([]);
  const [view, setView] = React.useState<View>("table");

  const hasCountries = countries.length > 0;

  const handleUpdateView = (newView: View) => {
    if (newView === view) return;

    setView(newView);
  };

  return (
    <styles.Container>
      <Search onChange={setCountries} />

      {hasCountries && (
        <>
          <ActionsIcon view={view} handleUpdateView={handleUpdateView} />

          {view === "table" ? (
            <Table countries={countries} />
          ) : (
            <List countries={countries} />
          )}
        </>
      )}

      <Highlighted />
    </styles.Container>
  );
};
