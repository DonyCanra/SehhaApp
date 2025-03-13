import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false, // State untuk Global Loading
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = globalSlice.actions;
export default globalSlice.reducer;
