import * as slices from "state/slices";

export const { setToast } = slices.toastSlice.actions
export const { setCredentials, clearCredentials } = slices.authSlice.actions;
export const { setFilterSearch, setFilterCategory } = slices.filterSlice.actions;
export const { setActiveGame } = slices.gameSlice.actions;