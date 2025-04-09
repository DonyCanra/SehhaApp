import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default localStorage
import authReducer from "../slices/authSlice";
import globalReducer from "../slices/globalSlice";

// Config persist hanya untuk slice `auth`
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["KConfiqData", "hospitalId"], // hanya simpan field ini
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // sudah dibungkus persist
    global: globalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // hindari warning redux-persist
    }),
});

export const persistor = persistStore(store);
export default store;
