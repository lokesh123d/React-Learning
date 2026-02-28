import { configureStore } from '@reduxjs/toolkit'
import adminReducer from '../feature/changeUser/adminSlice'

export const store = configureStore({
  reducer: {
    admin:adminReducer,
  },
})