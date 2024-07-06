import { ToastContainer } from "react-toastify";

import AppRoutes from "./routes";

import "react-toastify/dist/ReactToastify.css";
import "./styles/index.css";

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
