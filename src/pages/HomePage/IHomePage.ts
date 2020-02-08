/**
 * See notes here about using React Router with TypeScript:
 * https://stackoverflow.com/questions/44118060/react-router-dom-with-typescript
 * https://stackoverflow.com/questions/48138111/what-typescript-type-should-i-use-to-reference-the-match-object-in-my-props
 */

import {
    UserState,
} from '../../store/user/UserTypes';

// These are coming from the "match" object
export interface IHomePageOwnProps {

}

export interface IHomePageStateToProps {
    userState: UserState;
}

export interface IHomePageDispatchProps {

}