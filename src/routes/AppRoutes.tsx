import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Loader } from "../components";

import Home from "../pages/Home";
import AllCountries from "../pages/AllCountries";
import Details from "../pages/Details";
import NotFound from "../pages/NotFound";


const handleLoader = () => {
  return <Loader />;
}
const router = createBrowserRouter([
  {
    path: "/",
    loader: handleLoader,
    Component() {
      return <Home />;
    },
  },
  {
    path: "/all",
    loader: handleLoader,
    Component() {
      return <AllCountries />;
    },
  },
  {
    path: "/details/*",
    loader: handleLoader,
    Component() {
      return <Details />;
    },
  },
  {
    path: "/*",
    loader: handleLoader,
    Component() {
      return <NotFound />;
    },
  },
]);

export default function App() {

  if (import.meta.hot) {
    import.meta.hot.dispose(() => router.dispose());
  }

  return <RouterProvider router={router} fallbackElement={<Loader />} />;
}
