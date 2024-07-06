import React from "react";
import { SyncLoader } from "react-spinners";
import { ILoaderProps } from "./types";

import { primary } from "../../styles/theme";
import * as styles from "./styles";

export const Loader: React.FC<ILoaderProps> = ({
  $isFullScreen = false,
}: ILoaderProps) => {
  return (
    <styles.Container
      aria-labelledby="label-loading"
      $isFullScreen={$isFullScreen}
    >
      <SyncLoader size={15} color={primary.default} />
    </styles.Container>
  );
};
