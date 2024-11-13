import { configureStore } from '@reduxjs/toolkit'
import authSlice from './user/authSlice'
import userSlice from './user/userSlice'
import gameSlice from './game/gameSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
    game: gameSlice,
  },
})
