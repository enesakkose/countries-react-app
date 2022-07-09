import { configureStore } from '@reduxjs/toolkit'
import { countryApi } from '../services/countryApi'

export const store = configureStore({
  reducer: {
    [countryApi.reducerPath]: countryApi.reducer
  },
})