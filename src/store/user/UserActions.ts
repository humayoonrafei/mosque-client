import {
    UserState,
    UserActionTypes,
    UserActions
} from './UserTypes';

export const loginUser = (userState: UserState): UserActionTypes => ({
    type: UserActions.LOGIN_USER,
    payload: userState
});


export const logoutUser = (userState: UserState): UserActionTypes => ({
    type: UserActions.LOGOUT_USER,
    payload: userState
});

export const logoutUserAll = (userState: UserState): UserActionTypes => ({
    type: UserActions.LOGOUT_USER_ALL,
    payload: userState
});