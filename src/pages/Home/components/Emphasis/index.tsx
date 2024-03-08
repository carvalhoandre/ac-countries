import TheWorld from "../../../../assets/unDraw/around_the_world.svg";
import { Typography } from "../../../../components/Typography";

import * as styles from "./styles";

const Emphasis = (): JSX.Element => {
  return (
    <styles.Section>
      <styles.ContainerText>
        <Typography size="xxl" weight={900}>
          Descubra
          Milhares de países
        </Typography>

        <Typography size="xl" weight={300}>
          Explore o mundo em nosso marketplace
        </Typography>
      </styles.ContainerText>

      <styles.Image src={TheWorld} alt="Imagem_Ilustrativa" />
    </styles.Section>
  );
};

export default Emphasis;
