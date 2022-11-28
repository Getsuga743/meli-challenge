import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Profile, PurchaseDetail } from 'pages';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/profile" component={Profile} />
            <Route
                exact
                path="/profile/purchases/:id"
                component={PurchaseDetail}
            />
            <Redirect to="/profile" />
        </Switch>
    );
};
