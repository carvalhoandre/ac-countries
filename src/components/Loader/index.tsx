import React from "react";
import { SyncLoader } from "react-spinners";

import { primary } from "../../styles/theme";
import * as styles from "./styles";

export const Loader: React.FC = () => {
  return (
    <styles.Container aria-labelledby="label-loading">
      <SyncLoader size={15} color={primary.default} />
    </styles.Container>
  );
};
