import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/api";

export const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password, rememberMe }, { rejectWithValue }) => {
  try {
    const response = await API.post("/login", { email, password });
    const userData = response.data;

    console.log(response, "<<<response");

    if (rememberMe) {
      localStorage.setItem("token", userData.data);
    } else {
      sessionStorage.setItem("token", userData.data);
    }

    return userData;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Login Failed");
  }
});
