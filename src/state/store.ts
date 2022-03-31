import { configureStore } from "@reduxjs/toolkit"
import { reducer } from "./reducer";
import { setupListeners } from '@reduxjs/toolkit/query'
import { comeonAPI } from '../services/comeonAPI'

export const store = configureStore({ 
  reducer: {
    ...reducer,
    [comeonAPI.reducerPath]: comeonAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(comeonAPI.middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)