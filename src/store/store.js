import { configureStore } from "@reduxjs/toolkit";
import movieoReducer from "../redux/slices/movieoSlice";
import authReducer from "../redux/slices/authSlice";

export const store = configureStore({
  reducer: {
    movieoData: movieoReducer,
    auth: authReducer,
  },
});
