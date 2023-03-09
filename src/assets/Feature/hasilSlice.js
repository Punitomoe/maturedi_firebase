import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const hasilSlice = createSlice({
  name: "hasil",
  initialState,
  reducers: {
    calculate: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { calculate } = hasilSlice.actions;

export default hasilSlice.reducer;