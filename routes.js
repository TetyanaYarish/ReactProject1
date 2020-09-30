import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Home from './home';
import Add_Note from './about';
import Contact from './contact';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/about" exact><Add_Note/></Route>
            <Route path="/contact"><Contact /></Route>
            <Route path="/home"><Contact /></Route>
            <Route>404 - Not Found</Route>
        </Switch>

    );
}

export default Routes;
