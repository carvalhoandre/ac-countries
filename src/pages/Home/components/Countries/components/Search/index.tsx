import React from "react";

import { ISearchProps } from "./types";

import useCountries from "../../../../../../hooks/countries";

import { grey } from "../../../../../../styles/theme";
import { Typography } from "../../../../../../components/Typography";

import * as styles from "./styles";

export const Search = ({ onChange }: ISearchProps): JSX.Element => {
  const { searchCountriesByName } = useCountries();

  const [search, setSearch] = React.useState("");
  const handleSeach = async () => {
    const countriesResult = await searchCountriesByName(search);

    if (countriesResult.length > 0) onChange(countriesResult);
  };

  return (
    <styles.Container>
      <styles.Search>
        <i className="uil uil-search search_icon" />

        <styles.Input
          name="search"
          type="text"
          placeholder="Buscar..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </styles.Search>

      <styles.ButtonSearch onClick={handleSeach}>
        <Typography
          size="bg"
          $weight={500}
          textAlign="center"
          color={grey.lightest}
        >
          Explorar
        </Typography>
      </styles.ButtonSearch>
    </styles.Container>
  );
};
