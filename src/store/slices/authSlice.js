import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

let isAuthenticated = false;
const token = localStorage.getItem("access-token");
if (token) {
  try {
    const decoded = jwtDecode(token);
    isAuthenticated = decoded.exp > Date.now() / 1000;
  } catch (error) {
    console.log(error);
  }
}

const authSlice = createSlice({
  initialState: {
    isAuthenticated,
  },
  name: "auth",
  reducers: {
    setAuthenticated: (state, actions) => {
      state.isAuthenticated = actions.payload;
    },
  },
});

export const { setAuthenticated } = authSlice.actions;
export default authSlice.reducer;
