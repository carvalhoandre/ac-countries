import { IInformationProps } from "./types";

import { fontWeight } from "../../../../styles/theme";

import { Typography } from "../../../../components";
import * as styles from "./styles";

const Information = ({ title, text }: IInformationProps): JSX.Element => {
  return (
    <styles.Container>
      <Typography $weight={fontWeight.medium} size="lg" $textAlign="left">
        {title}:
      </Typography>

      <Typography>{text}</Typography>
    </styles.Container>
  );
};

export default Information;
