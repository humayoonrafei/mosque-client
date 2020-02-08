import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import { AuthPage } from '../pages/AuthPage/AuthPage';

export function createRoutes(): JSX.Element {
    return (
        <Switch>
            <Route
                exact
                path='/'
                render={(props) => <HomePage {...props} />}
            />
            <Route
                exact
                path='/auth'
                render={(props) => <AuthPage {...props} />}
            />
        </Switch>
    );
}
