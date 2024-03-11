import { ISearchProps } from "./types";

import * as styles from "./styles";

export const Search = ({ onChange }: ISearchProps): JSX.Element => {
  return (
    <styles.Container>
      <i className="uil uil-search search_icon" />

      <styles.Input
        name="search"
        type="text"
        placeholder="Buscar..."
        onChange={(e) => onChange(e.target.value)}
      />
    </styles.Container>
  );
};
