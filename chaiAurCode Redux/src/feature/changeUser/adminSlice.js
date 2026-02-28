import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminDetails: {
    userName: "admin",
    password: "admin@123",
  },
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    lokeshAdmin: (state) => {
      state.adminDetails.userName = "lokesh";
      state.adminDetails.password = "lokesh@123";
    },
    ankushAdmin: (state) => {
      state.adminDetails.userName = "ankush";
      state.adminDetails.password = "ankush@123";
    },
    setAdmin: (state, action) => {
      state.adminDetails.userName = action.payload.userName;
      state.adminDetails.password = action.payload.password;
    },
  },
});



export const { lokeshAdmin, ankushAdmin, setAdmin } = adminSlice.actions;
export default adminSlice.reducer;