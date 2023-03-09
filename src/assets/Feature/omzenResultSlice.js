import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const omzetResultSlice = createSlice({
  name: "omzetResult",
  initialState,
  reducers: {
    calculate: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { calculate } = omzetResultSlice.actions;

export default omzetResultSlice.reducer;