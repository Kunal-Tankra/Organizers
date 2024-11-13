import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  gameSelected: 'football',
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setValueToFootball: (state) => {
      state.gameSelected = 'football'
    },
    setValueToBasketball: (state) => {
      state.gameSelected = 'basketball'
    },
  },
})

export default gameSlice.reducer

export const { setValueToFootball, setValueToBasketball } = gameSlice.actions
