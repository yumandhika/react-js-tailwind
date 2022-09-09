import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

// this is for dispatch
export const { setToken } = authSlice.actions;

// this is for configureStore
export default authSlice.reducer;
