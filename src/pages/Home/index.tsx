import { Header } from "../../components";
import Emphasis from "./components/Emphasis";

import * as styles from "./styles";
import Countries from "./components/Countries";

const Home = () => {
  return (
    <>
      <Header />

      <styles.Container>
        <Emphasis />

        <Countries />
      </styles.Container>
    </>
  );
};

export default Home;
