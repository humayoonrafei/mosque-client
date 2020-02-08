export interface UserState {
    email?: string | undefined;
    auth_token: string | undefined;
    firstname?: string | undefined;
    lastname?: string | undefined;
    user_type: number | undefined;
}

export interface User extends UserState {
    passwd: string | undefined;
    cellphone: string | undefined;
    addr_line1: string | undefined;
    city: string | undefined;
    state: string | undefined;
    zip: number | undefined;
}

// USING ENUMS WILL CAUSE MAJOR PROBLEMS!
// export enum UserActions {
//     LOGIN_USER,
//     LOGOUT_USER,
//     LOGOUT_USER_ALL
// };

export const UserActions = {
    LOGIN_USER: 'LOGIN_USER',
    LOGOUT_USER: 'LOGOUT_USER',
    LOGOUT_USER_ALL: 'LOGOUT_USER_ALL'
};

interface LoginUserAction {
    type: typeof UserActions.LOGIN_USER,
    payload: UserState
}

interface LogoutUserAction {
    type: typeof UserActions.LOGOUT_USER,
    payload: UserState
}

interface LogoutUserAllAction {
    type: typeof UserActions.LOGOUT_USER_ALL,
    payload: UserState
}

export type UserActionTypes = LoginUserAction | LogoutUserAction | LogoutUserAllAction;