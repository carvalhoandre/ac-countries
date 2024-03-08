import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

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
  /* TODO: implementar login */
  const [isLoading, setIsLoading] = useState(false);

  if (import.meta.hot) {
    import.meta.hot.dispose(() => router.dispose());
  }

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  return <RouterProvider router={router} />;
}
