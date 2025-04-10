import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/authActions";

const initialState = {
  KConfiqData: null,
  facility: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.KConfiqData = null;
      state.facility = null;
      state.error = null;
      state.loading = false;

      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    },

    // ✅ Tambahkan reducer baru
    setFacilityByName: (state, action) => {
      const hospitalName = action.payload;
      const hospital = state.KConfiqData?.hospitals?.find((h) => h.name === hospitalName);
      if (hospital) {
        state.facility = hospital;
      }
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
        const facility = user?.hospitals?.[0] || null;

        state.loading = false;
        state.KConfiqData = user;
        state.facility = facility;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login gagal";
      });
  },
});

export const { logout, setFacilityByName } = authSlice.actions;
export default authSlice.reducer;
