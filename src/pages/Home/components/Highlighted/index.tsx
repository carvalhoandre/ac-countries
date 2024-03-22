import { Typography } from "../../../../components";
import { fontWeight, grey, primary } from "../../../../styles/theme";

import * as styles from "./styles";

export const Highlighted = () => {
  return (
    <styles.Container>
      <Typography size="md" color={grey.white} $weight={fontWeight.medium}>
        Explore Novos Países e Culturas
      </Typography>

      <styles.DiscoverButton to="/all">
        <Typography
          size="md"
          color={primary.default}
          $weight={fontWeight.medium}
        >
          Vamos lá? 
        </Typography>
      </styles.DiscoverButton>
    </styles.Container>
  );
};
