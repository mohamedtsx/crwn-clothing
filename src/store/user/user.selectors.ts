import { createSelector } from "reselect";

import { UserState } from "./user.reducer";

const selectUserReducer = (state): UserState => state.users;

export const selectCurrentUser = createSelector(
    selectUserReducer,
    (user) => user.currentUser
);
