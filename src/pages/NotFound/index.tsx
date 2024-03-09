import { Header, Typography } from "../../components";

import NotFoundImage from "../../assets/unDraw/notFound.svg";

import * as styles from "./styles";
const Details = () => {
  return (
    <>
      <Header />

      <styles.Container>
        <Typography size="bg" $weight={500}>
          404: Nada por aqui
        </Typography>
        <styles.Image src={NotFoundImage} alt="Imagem_Ilustrativa" />
      </styles.Container>
    </>
  );
};

export default Details;
