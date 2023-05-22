import { createSelector } from "reselect";

import { UserState } from "./user.reducer";
import { RootState } from "../store";

const selectUserReducer = (state: RootState): UserState => state.users;

export const selectCurrentUser = createSelector(
    selectUserReducer,
    (user) => user.currentUser
);

export const selectAuthError = createSelector(
    selectUserReducer,
    (state) => state.error
);
