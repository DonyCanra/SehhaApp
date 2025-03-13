import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/api";

// Fungsi untuk menyimpan token
const saveToken = (token, rememberMe) => {
  if (rememberMe) {
    localStorage.setItem("token", token);
  } else {
    sessionStorage.setItem("token", token);
  }
};

// Fungsi untuk menghapus token saat logout
export const clearAuthData = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
};

// Async Thunk untuk login
export const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password, rememberMe }, { rejectWithValue }) => {
  try {
    const response = await API.post("/login", { email, password });
    const userData = response.data;

    console.log(response, "<<<response");

    // Simpan token menggunakan helper function
    saveToken(userData.data, rememberMe);

    return userData;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Login Failed");
  }
});

export const logoutUser = createAsyncThunk("auth/logoutUser", async (_, { dispatch }) => {
  try {
    // Panggil fungsi untuk menghapus token
    clearAuthData();

    // Reset state Redux (opsional, jika ada state lain yang perlu dihapus)
    dispatch({ type: "auth/resetState" });

    return true;
  } catch (error) {
    return false;
  }
});
