import {
    UserState,
    UserActionTypes,
    UserActions
} from './UserTypes';

const INITIAL_STATE: UserState = {
    email: undefined,
    auth_token: undefined,
    firstname: undefined,
    lastname: undefined,
    user_type: undefined
};

export const userReducer = (prevState: UserState = INITIAL_STATE, action: UserActionTypes) => {
    switch (action.type) {
        case UserActions.LOGIN_USER:
            // console.log('USER REDUCER: LOGIN', action.type, UserActions.LOGIN_USER);
            return {
                email: action.payload.email,
                auth_token: action.payload.auth_token,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                user_type: action.payload.user_type
            };

        case UserActions.LOGOUT_USER:
            // console.log('USER REDUCER: LOGOUT');
            return INITIAL_STATE;

        case UserActions.LOGOUT_USER_ALL:
            // console.log('USER REDUCER: LOGOUT ALL');
            return INITIAL_STATE

        default:
            // console.log('USER REDUCER: DEFAULT CASE');
            return prevState;
    }
};