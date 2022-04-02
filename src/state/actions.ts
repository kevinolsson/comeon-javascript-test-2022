import * as slices from "state/slices";

export const {
  increment,
  decrement
} = slices.counterSlice.actions;

export const {
  setCredentials
} = slices.authSlice.actions;