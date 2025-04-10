import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false, // State untuk Global Loading
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setGlobalLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setGlobalLoading } = globalSlice.actions;
export default globalSlice.reducer;
