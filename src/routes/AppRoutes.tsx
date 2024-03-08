import { createBrowserRouter, RouterProvider } from "react-router-dom";

import useCountries from "../hooks/countries";

import Home from "../pages/Home";
import Countries from "../pages/Countries";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => ({ message: "Carregando" }),
    Component() {
      return <Home />;
    },
  },
  {
    path: "/countries",
    loader: () => ({ message: "Carregando" }),
    Component() {
      return <Countries />;
    },
  },
]);

export default function App() {
  const { loading } = useCountries();

  if (import.meta.hot) {
    import.meta.hot.dispose(() => router.dispose());
  }

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return <RouterProvider router={router} />;
}
