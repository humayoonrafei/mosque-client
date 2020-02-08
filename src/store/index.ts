/**
* Solution to get Redux Devtools working: 
* https://github.com/jaysoo/todomvc-redux-react-typescript/issues/8
*/

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './RootReducer';
import { UserState } from './user/UserTypes';

export interface AppState {
    userState: UserState,
}

export const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()) || compose
));

store.subscribe(() => {
    console.log(store.getState());
});

// export type AppState = ReturnType<typeof rootReducer>;
