import TheWorld from "../../../../assets/unDraw/around_the_world.svg";
import { Typography } from "../../../../components/Typography";
import { grey } from "../../../../styles/theme";

import * as styles from "./styles";

const Emphasis = (): JSX.Element => {
  return (
    <>
      <styles.Info>
        <Typography
          size="bg"
          $weight={700}
          textAlign="center"
          color={grey.lightest}
        >
          Em construção
        </Typography>
      </styles.Info>

      <styles.Container>
        <styles.ContainerText>
          <Typography size="xxl" $weight={900}>
            Descubra Milhares de países
          </Typography>

          <Typography $weight={300}>
            Explore o mundo buscando países em nosso marketplace
          </Typography>
        </styles.ContainerText>

        <styles.Image src={TheWorld} alt="Imagem_Ilustrativa" />
      </styles.Container>
    </>
  );
};

export default Emphasis;
