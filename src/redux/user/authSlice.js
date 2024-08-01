import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  authState: 'NO',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setValueToAuth: (state) => {
      state.authState = 'AUTH'
    },
    setValueToUnAuth: (state) => {
      state.authState = 'NO'
    },
  },
})

export default authSlice.reducer

export const { setValueToAuth, setValueToUnAuth } = authSlice.actions
