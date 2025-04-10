import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/api";
import { setFacilityByName } from "../slices/authSlice";

const saveToken = (token, rememberMe) => {
  if (rememberMe) {
    localStorage.setItem("token", token);
  } else {
    sessionStorage.setItem("token", token);
  }
};

export const clearAuthData = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
};

export const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password, rememberMe }, { rejectWithValue }) => {
  try {
    const response = await API.post("api/auth/login", { email, password });
    const userData = response.data.data;
    console.log(userData, "<<<");

    // const userData = { email, password };
    saveToken(userData.token, rememberMe);
    return userData;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Login Failed");
  }
});

export const logoutUser = createAsyncThunk("auth/logoutUser", async (_, { dispatch }) => {
  try {
    clearAuthData();

    dispatch({ type: "auth/resetState" });

    return true;
  } catch (error) {
    return false;
  }
});

export const setFacilityByNameAsync = createAsyncThunk("auth/setFacilityByNameAsync", async (name, { dispatch }) => {
  dispatch(setFacilityByName(name));
});
