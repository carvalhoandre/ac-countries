import Header from "../../components/Header";
import { Typography } from "../../components/Typography";
import Emphasis from "./components/Emphasis";

import { grey } from "../../styles/theme";
import * as styles from "./styles";

const Home = () => {
  return (
    <>
      <Header />

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

      <Emphasis />
    </>
  );
};

export default Home;
