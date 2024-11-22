// Redux Slice (e.g., store/slices/dropdownSlice.js)
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDropdownVisible: false,
};

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    toggleDropdown: (state) => {
      state.isDropdownVisible = !state.isDropdownVisible;
    },
    hideDropdown: (state) => {
      state.isDropdownVisible = false;
    },
  },
});

export const { toggleDropdown, hideDropdown } = dropdownSlice.actions;
export default dropdownSlice.reducer;
