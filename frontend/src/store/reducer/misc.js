import { createSlice } from "@reduxjs/toolkit";

export const miscSlice = createSlice({
  name: "misc",
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    changeDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { changeDarkMode } = miscSlice.actions;

export default miscSlice.reducer;
