import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  initialState: {
    alert: {
      text: "Error",
      active: false,
      type: "error",
    },
    sidebar: {
      isOpen: false,
    },
    isAuthenticated: false,
  },
  name: "UI",
  reducers: {
    setAlert: (state, action) => {
      state.alert = { ...action.payload };
    },
    setSidebar: (state, action) => {
      state.sidebar = action.payload;
    },
  },
});
export const { setAlert, setSidebar } = uiSlice.actions;
export default uiSlice.reducer;
