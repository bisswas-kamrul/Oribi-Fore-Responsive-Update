import { configureStore } from '@reduxjs/toolkit'
import  AdToCrat  from '../AdtoCartFolder/AdToCrat'


export const store = configureStore({
  reducer: {
    AdToCrat:AdToCrat
  },
})