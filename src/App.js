import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import router from "./routes";
// import { Provider } from "react-redux";
// import store from "../src/store/index";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {/* <Provider> */}
      <RouterProvider router={router} />
      {/* </Provider> */}
    </>
  );
}

export default App;
