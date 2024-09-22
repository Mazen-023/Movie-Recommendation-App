// src/redux/slices/authSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isAuthenticated: false, // Start with user being logged out
  user: null,
  isLoading: false,
  error: null,
};

const api = axios.create({ baseURL: process.env.REACT_APP_API_URL })

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signup", userData); // Adjust the URL to your API endpoint
      return response.data;
    } catch (error) {
      // Return the error message
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload; // Store user data from the response
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Store error message
      });
  },
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

export const { login, logout, } = authSlice.actions;
export default authSlice.reducer;

