import { createSlice, createAction } from "@reduxjs/toolkit";

export const toggleHamburger = createAction("hamburger/toggleHamburger");

const initialState = {
  isOpen: false,
};

const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(toggleHamburger, (state) => {
      state.isOpen = !state.isOpen;
    });
  },
});

export default hamburgerSlice.reducer;
