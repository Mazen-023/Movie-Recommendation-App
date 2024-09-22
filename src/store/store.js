import { configureStore } from "@reduxjs/toolkit";
import movieoReducer from "../redux/slices/movieoSlice";
import authReducer from "../components/Form/authSlice";

export const store = configureStore({
  reducer: {
    movieoData: movieoReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
