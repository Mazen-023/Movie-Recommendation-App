// src/redux/slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false, // By default, the user is logged out
  user: null, // Store user details when logged in
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload; // Store user info
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null; // Clear user info
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
