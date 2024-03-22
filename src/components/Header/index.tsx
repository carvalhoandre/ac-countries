import React from "react";
import { Link } from "react-router-dom";

import { fontWeight } from "../../styles/theme";

import { Typography } from "../Typography";

import Logo from "../../assets/ac-logo.svg";

import * as styles from "./styles";

 const Header: React.FC = () => {
  return (
    <styles.Header>
      <styles.Container>
        <Link to="/">
          <styles.LogoComponent src={Logo} alt="AC-Logo" />
        </Link>

        <Typography size="md" $weight={fontWeight.medium} $isUppercase>
          AC Countries
        </Typography>
      </styles.Container>
    </styles.Header>
  );
};

export default Header;
