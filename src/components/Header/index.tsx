import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/ac-logo.svg";

import * as styles from "./styles";

const Header: React.FC = () => {
  return (
    <styles.Header>
      <Link to="/">
        <styles.LogoComponent src={Logo} alt="AC-Logo" />
      </Link>
    </styles.Header>
  );
};

export default Header;
