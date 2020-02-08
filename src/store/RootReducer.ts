import { combineReducers, Reducer } from 'redux';
import { userReducer } from './user/UserReducer';
import { AppState } from './index';

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
    userState: userReducer,
} as any); // HOTFIX: https://github.com/reduxjs/redux/issues/2709

// export default rootReducer;