import React from "react";

import { Typography } from "../Typography";

import * as styles from "./styles";
import { grey } from "../../styles/theme";

export const Footer: React.FC = () => {
  return (
    <styles.Footer>
      <styles.Content>
        <Typography size="sm" color={grey.darkest}>
          &#169; André Carvalho. All rigths reserved
        </Typography>
      </styles.Content>
    </styles.Footer>
  );
};
