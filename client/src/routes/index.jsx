import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Profile } from 'pages/';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/profile" component={Profile} />
            <Redirect to="/profile" />
        </Switch>
    );
};
