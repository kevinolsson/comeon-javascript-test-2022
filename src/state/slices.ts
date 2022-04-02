import { createSlice } from "@reduxjs/toolkit";
import type { User } from 'services/comeonAPI';
import type { RootState } from './store';

type AuthState = {
  player: User | null
}

type CounterSliceState = { value: number };
export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 } as CounterSliceState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    }
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: { player: null } as AuthState,
  reducers: {
    setCredentials: ( state, { payload: { data }} ) => {
      console.log({ data });
      state.player = data.player
    },
  },
})
