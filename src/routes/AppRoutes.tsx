import { createBrowserRouter, RouterProvider } from "react-router-dom";

import useCountries from "../hooks/countries";

import Home from "../pages/Home";
import { Loader } from "../components";

const router = createBrowserRouter([
  {
    path: "/*",
    loader: () => ({ message: "Carregando" }),
    Component() {
      return <Home />;
    },
  },
]);

export default function App() {
  const { loading } = useCountries();

  if (import.meta.hot) {
    import.meta.hot.dispose(() => router.dispose());
  }

  if (loading) {
    return <Loader />;
  }

  return <RouterProvider router={router} />;
}
