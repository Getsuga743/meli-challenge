import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Profile, ProductDetail } from 'pages';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/products/:id" component={ProductDetail} />
            <Redirect to="/404" />
        </Switch>
    );
};
