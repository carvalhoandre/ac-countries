import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import { Loader } from "../components";

import Home from "../pages/Home";
import AllCountries from "../pages/AllCountries";
import NotFound from "../pages/NotFound";
import Details from "../pages/Details";

const handleLoader = () => {
  return <Loader />;
}

const Routes = () => {
  return (
      <BrowserRouter>
          <Switch>
              <Route path=""  element={<Home />} loader={handleLoader} />
              <Route path="/all"  element={<AllCountries />} loader={handleLoader} />
              <Route path="/details/:countrieName"  element={<Details />}  />
              <Route path="*"  element={<NotFound />} loader={handleLoader} />
          </Switch>
      </BrowserRouter>
  );
}

export default Routes;