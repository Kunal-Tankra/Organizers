import { configureStore } from '@reduxjs/toolkit'
import authSlice from './user/authSlice'
import userSlice from './user/userSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
  },
})
