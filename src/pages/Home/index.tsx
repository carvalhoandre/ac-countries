import { Header, Footer } from "../../components";
import Emphasis from "./components/Emphasis";

import * as styles from "./styles";
import Countries from "./components/Countries";

const Home = () => {
  return (
    <>
      <Header />

      <styles.Content>
        <styles.Container>
          <Emphasis />

          <Countries />
        </styles.Container>

        <Footer />
      </styles.Content>
    </>
  );
};

export default Home;
