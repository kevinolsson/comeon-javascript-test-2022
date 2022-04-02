import * as slices from "./slices";

export const reducer = {
  counter: slices.counterSlice.reducer,
  auth: slices.authSlice.reducer
};
