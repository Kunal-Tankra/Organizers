import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state) => {
      state.value = 'ABC'
    },
  },
})

export default userSlice.reducer

export const { setName } = userSlice.actions
