import { configureStore } from '@reduxjs/toolkit'
import PortfolioSlice from './PortfolioSlice'

export const store = configureStore({
  reducer: {
    portfolio:PortfolioSlice
  },
})

