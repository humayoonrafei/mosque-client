import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';

export function createRoutes(): JSX.Element {
    return (
        <Switch>
            <Route
                exact
                path='/'
                render={(props) => <HomePage {...props} />}
            />
        </Switch>
    );
}
