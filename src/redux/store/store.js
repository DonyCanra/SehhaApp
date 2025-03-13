import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import globalReducer from "../slices/globalSlice"; // Import reducer global

const store = configureStore({
  reducer: {
    auth: authReducer,
    global: globalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }),
});

export default store;
