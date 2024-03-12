import Exploring from "../../../../assets/unDraw/exploring.svg";

import { Typography } from "../../../../components";
import { fontWeight, grey } from "../../../../styles/theme";

import * as styles from "./styles";

export const Highlighted = () => {
  return (
    <styles.Container>
      <styles.IllustrationImage src={Exploring}  alt="Imagem ilustrativa explorando" />
      
      <styles.TextContainer>
        <Typography size="lg" color={grey.white} $weight={fontWeight.medium}>
          Descubra novos países e culturas ao redor do mundo
        </Typography>

        <styles.DiscoverButton to="/all">
        Descobrir
      </styles.DiscoverButton>

      </styles.TextContainer>
    </styles.Container>
  );
};
