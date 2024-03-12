import { Header, Typography } from "../../components";

import NotFoundImage from "../../assets/unDraw/notFound.svg";

import * as styles from "./styles";
import { fontWeight } from "../../styles/theme";
const NotFound = () => {
  return (
    <>
      <Header />

      <styles.Container>
        <Typography size="bg" $weight={fontWeight.medium}>
          404: Nada por aqui
        </Typography>
        <styles.Image src={NotFoundImage} alt="Imagem_Ilustrativa" />
      </styles.Container>
    </>
  );
};

export default NotFound;
