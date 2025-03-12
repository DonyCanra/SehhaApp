import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import router from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store/store";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
