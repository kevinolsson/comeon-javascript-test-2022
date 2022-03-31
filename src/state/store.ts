import { configureStore } from "@reduxjs/toolkit"
import { reducer } from "./reducer";
import { setupListeners } from '@reduxjs/toolkit/query'
import { gamesApi } from '../services/games'

export const store = configureStore({ 
  reducer: {
    ...reducer,
    [gamesApi.reducerPath]: gamesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gamesApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)