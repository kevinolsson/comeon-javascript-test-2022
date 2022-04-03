import { createSlice } from "@reduxjs/toolkit";
import { IUser } from 'services/interfaces';
import { IToast } from 'components/Toast/Toast';

type TToastState = IToast
type TAuthState = { user: IUser | null }

export const toastSlice = createSlice({
  name: 'toast',
  initialState: { message: '', variant: 'success' } as TToastState,
  reducers: {
    setToast: (state, { payload }) => {
      state.message = payload.message;
      state.variant = payload.variant;
    }
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null } as TAuthState,
  reducers: {
    setCredentials: ( state, { payload: { data }} ) => {
      state.user = data.player
    },
    clearCredentials: (state) => {
      state.user = null
    }
  },
})
