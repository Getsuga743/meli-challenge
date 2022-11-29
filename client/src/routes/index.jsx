import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Profile, PurchaseDetail } from 'pages';

export const Routes = () => {
    return (
        <React.Suspense fallback={<>..</>}>
            <Switch>
                <Route exact path="/profile" component={Profile} />
                <Route
                    exact
                    path="/profile/purchases/:purchaseId"
                    component={PurchaseDetail}
                />
                <Redirect to="/profile" />
            </Switch>
        </React.Suspense>
    );
};
