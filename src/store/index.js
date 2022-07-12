import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { countryApi } from '../services/countryApi'

export const store = configureStore({
  reducer: {
    [countryApi.reducerPath]: countryApi.reducer,
  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(countryApi.middleware),
  
})

setupListeners(store.dispatch)