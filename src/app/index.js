import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import router from "../routes";
import { Provider } from "react-redux";
import store from "../redux/store";
import GlobalLoading from "../components/Loader/GlobalLoading";

function App() {
  return (
    <Provider store={store}>
      <GlobalLoading />
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </Provider>
  );
}

export default App;
