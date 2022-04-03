import * as slices from "./slices";

export const reducer = { 
  toast: slices.toastSlice.reducer,
  auth: slices.authSlice.reducer,
  filter: slices.filterSlice.reducer
};
