import TheWorld from "../../../../assets/unDraw/around_the_world.svg";
import { Typography } from "../../../../components/Typography";
import { fontWeight, grey } from "../../../../styles/theme";

import * as styles from "./styles";

export const Emphasis = (): JSX.Element => {
  return (
    <>
      <styles.Info>
        <Typography
          size="bg"
          $weight={fontWeight.bold}
          $textAlign="center"
          color={grey.lightest}
        >
          Em Desenvolvimento
        </Typography>
      </styles.Info>

      <styles.Container>
        <styles.ContainerText>
          <Typography size="xxl" $weight={fontWeight.black}>
            Explore uma Diversidade de Países
          </Typography>

          <Typography>Descubra Novos Destinos em Nosso Marketplace</Typography>
        </styles.ContainerText>

        <styles.Image src={TheWorld} alt="Imagem_Ilustrativa" />
      </styles.Container>
    </>
  );
};
