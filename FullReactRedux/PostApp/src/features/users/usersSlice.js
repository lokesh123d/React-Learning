import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id:1,name:'lokesh dangwal'},
    {id:2,name:'i dont knwo'},
    {id:3,name:'a man'}
]

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{

    }
})

export const selectAllUsers = (state) =>state.users

export default userSlice.reducer;


