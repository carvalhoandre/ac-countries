import React from "react";
import {
  Header,
  Footer,
  Loader,
  List,
  Typography,
} from "../../components";

import * as styles from "./styles";
import useCountries from "../../hooks/countries";

const AllCountries = () => {   
  const { countries, loading, fechCountries } = useCountries();

  React.useEffect(()=> {
    fechCountries();
  }, [])

  return (
    <>
      <Header />
      
      <styles.Content>
      <Typography $weight={800} size="xl" textAlign="center">
        Descubra Novos países
      </Typography>

        <styles.Container>
          {loading && countries.length < 1  ? <Loader /> : <List countries={countries} />}
        </styles.Container>

        <Footer />
      </styles.Content>
    </>
  );
};

export default AllCountries;
