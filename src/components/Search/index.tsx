import React from "react";

import { ISearchProps } from "./types";

import useCountries from "../../hooks/countries";
import { useStorage } from "../../hooks/storage/search";

import { fontWeight, grey } from "../../styles/theme";

import { Loader, Typography } from "..";
import * as styles from "./styles";

export const Search = ({ onChange }: ISearchProps): JSX.Element => {
  const { searchCountriesByName } = useCountries();
  const { setSearchStorage, getSearchStorage } = useStorage();

  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [isHistoryVisible, setHistoryVisible] = React.useState(false);
  const historySearch = getSearchStorage();

  const handleSearch = async () => {
    setLoading(true);

    if (historySearch) setHistoryVisible(false);

    const countriesResult = await searchCountriesByName(search);

    onChange(countriesResult);

    setSearchStorage(search);

    setLoading(false);
  };

  const handleInputFocus = () => {
    setHistoryVisible(true);
  };

  const handleHistoryItemClick = (searchItem: string) => {
    setHistoryVisible(false);

    setSearch(searchItem);
  };

  if (loading) return <Loader />;

  return (
    <styles.Container>
      <styles.Search>
        <i className="uil uil-search search_icon" />

        <styles.Input
          name="search-input"
          type="text"
          placeholder="Pesquise por País"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={handleInputFocus}
        />

        {isHistoryVisible && historySearch.length > 0 && (
          <styles.History>
            {historySearch.map((searchItem: string, index: number) => (
              <styles.ButtonHistory
                key={index}
                onClick={() => handleHistoryItemClick(searchItem)}
              >
                <Typography size="sm">{searchItem}</Typography>
              </styles.ButtonHistory>
            ))}
          </styles.History>
        )}
      </styles.Search>

      <styles.ButtonSearch onClick={handleSearch} disabled={!search}>
        <Typography
          size="bg"
          $weight={fontWeight.medium}
          $textAlign="center"
          color={grey.lightest}
        >
          Explorar
        </Typography>
      </styles.ButtonSearch>
    </styles.Container>
  );
};
