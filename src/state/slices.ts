import { createSlice } from "@reduxjs/toolkit";
import type { IUser } from 'services/interfaces';

type TToastState = { message: string | null }
type TAuthState = { user: IUser | null }

export const toastSlice = createSlice({
  name: 'toast',
  initialState: { message: null } as TToastState,
  reducers: {
    setToast: (state, { payload }) => {state.message = payload }
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null } as TAuthState,
  reducers: {
    setCredentials: ( state, { payload: { data }} ) => {
      state.user = data.player
    },
  },
})
