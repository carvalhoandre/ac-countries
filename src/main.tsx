import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

import AppRoutes from "./routes";

import "react-toastify/dist/ReactToastify.css";
import "./styles/index.css";

const container = document.getElementById("root");

if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <AppRoutes />

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </React.StrictMode>
  );
}
