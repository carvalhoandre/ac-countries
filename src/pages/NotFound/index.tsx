import { Header, Typography } from "../../components";

import NotFoundImage from "../../assets/unDraw/notFound.svg";

import * as styles from "./styles";
import { fontWeight } from "../../styles/theme";
const NotFound = () => {
  return (
    <>
      <Header />

      <styles.Container>
        <styles.Image src={NotFoundImage} alt="Imagem_Ilustrativa" />
       
        <Typography size="xxl" $weight={fontWeight.medium}>
          404: Nada por aqui
        </Typography>
      </styles.Container>
    </>
  );
};

export default NotFound;
