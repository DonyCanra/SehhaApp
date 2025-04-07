import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/authActions";

const initialState = {
  KConfiqData: null,
  hospitalId: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.KConfiqData = null;
      state.hospitalId = null;
      state.error = null;
      state.loading = false;

      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const user = action.payload?.user || null;
        const hospitalId = user?.hospitals?.[0]?.id || null;

        state.loading = false;
        state.KConfiqData = user;
        state.hospitalId = hospitalId;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login gagal";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
