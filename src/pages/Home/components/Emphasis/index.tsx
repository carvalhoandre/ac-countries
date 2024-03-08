import { Link } from "react-router-dom";

import TheWorld from "../../../../assets/unDraw/around_the_world.svg";
import { Typography } from "../../../../components/Typography";
import { grey } from "../../../../styles/theme";

import * as styles from "./styles";

const Emphasis = (): JSX.Element => {
  return (
    <styles.Section>
      <styles.ContainerText>
        <Typography size="xxl" weight={900}>
          Descubra Milhares de países
        </Typography>

        <Typography weight={300}>
          Explore o mundo em nosso marketplace
        </Typography>

        <Link to='/countries'>
          <styles.ButtonHome>
            <Typography
              size="bg"
              weight={500}
              textAlign="center"
              color={grey.lightest}
            >
              Explorar
            </Typography>
          </styles.ButtonHome>
        </Link>
      </styles.ContainerText>

      <styles.Image src={TheWorld} alt="Imagem_Ilustrativa" />
    </styles.Section>
  );
};

export default Emphasis;
