import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increaseBy5:(state)=>{
        state.value+=5
    }
  },
});

export const {increment , decrement ,increaseBy5} = counterSlice.actions;
export default counterSlice.reducer