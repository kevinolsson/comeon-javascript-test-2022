import { createSlice } from "@reduxjs/toolkit";
import { IUser } from 'services/interfaces';
import { IToast } from 'components/Toast/Toast';

type TToastState = IToast
type TAuthState = { user: IUser | null }
type TFilterState = {
  search: string | null;
  category: number | null;
}

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

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    search: '',
    category: null
  } as TFilterState,
  reducers: {
    setFilterSearch: (state, { payload }) => {
      state.search = payload
    },
    setFilterCategory: (state, { payload }) => {
      state.category = payload
    }
  }
})