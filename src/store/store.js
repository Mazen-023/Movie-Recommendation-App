import { configureStore } from "@reduxjs/toolkit";
import movieoReducer from "../redux/slices/movieoSlice";
import authReducer from "../redux/slices/authSlice";
import favoriteMovies from "../redux/slices/movieReducer";

export const store = configureStore({
  reducer: {
    movieoData: movieoReducer,
    auth: authReducer,
    favorite: favoriteMovies,
  },
});

