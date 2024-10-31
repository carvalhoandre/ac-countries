import { Link, useNavigate } from "react-router-dom";

import { fontWeight } from "../../styles/theme";

import { Typography } from "../Typography";

import Logo from "../../assets/ac-logo.svg";
import LeftArrow from "../../assets/left-arrow.svg";

import * as styles from "./styles";
import { IHeaderProps } from "./types";

const Header = ({ hasGoBack }: IHeaderProps): JSX.Element => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <styles.Header>
      <styles.Container>
        {hasGoBack && (
          <styles.IconComponent
            src={LeftArrow}
            alt="AC-Logo"
            onClick={handleGoBack}
          />
        )}

        <styles.SubContainer>
          <Link to="/">
            <styles.LogoComponent src={Logo} alt="AC-Logo" />
          </Link>

          <Typography size="md" $weight={fontWeight.medium} $isUppercase>
            AC Countries
          </Typography>
        </styles.SubContainer>
      </styles.Container>
    </styles.Header>
  );
};

export default Header;
