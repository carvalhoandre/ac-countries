import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/ac-logo.svg";

import * as styles from "./styles";
import { Typography } from "../Typography";

export const Header: React.FC = () => {
  return (
    <styles.Header>
      <styles.Container>
        <Link to="/">
          <styles.LogoComponent src={Logo} alt="AC-Logo" />
        </Link>

        <Typography size="md" $weight={500} $isUppercase>
          AC Countries
        </Typography>
      </styles.Container>
    </styles.Header>
  );
};
