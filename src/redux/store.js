import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from "./hamburger/slice";

export const store = configureStore({
  reducer: {
    hamburger: hamburgerReducer,
  },
});
