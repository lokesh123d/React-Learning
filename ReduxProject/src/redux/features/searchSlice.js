import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
name:'Search',
initialState:{
    query:'',
    activeTab:''
}
})