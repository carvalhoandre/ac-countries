import { Header, Footer } from "../../components";

import { Countries, Emphasis } from "./components";
import * as styles from "./styles";

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
