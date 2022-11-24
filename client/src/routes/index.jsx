import { Route, Switch, Redirect } from 'react-router-dom';
import { Profile } from '../pages/Profile';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/profile" component={Profile} />
            <Redirect to="/profile" />
        </Switch>
    );
};
