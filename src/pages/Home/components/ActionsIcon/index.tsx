import { IActionsIconProps } from "./types";

import { fontWeight } from "../../../../styles/theme";

import { Typography } from "../../../../components";

import * as styles from "./styles";

export const ActionsIcon = ({
  view,
  handleUpdateView,
}: IActionsIconProps): JSX.Element => {
  return (
    <styles.Container>
      <Typography size="md" $weight={fontWeight.medium}>
        Visualização
      </Typography>

      <div onClick={() => handleUpdateView("table")}>
        <styles.Icon selected={view === "table"}>
          <i className="uil-list-ul" />
          <Typography size="sm">Tabela</Typography>
        </styles.Icon>
      </div>

      <div onClick={() => handleUpdateView("card")}>
        <styles.Icon selected={view === "card"}>
          <i className="uil-card-atm" />
          <Typography size="sm">Card</Typography>
        </styles.Icon>
      </div>
    </styles.Container>
  );
};
