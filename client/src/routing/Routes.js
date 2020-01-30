import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/dashboard/Dashboard';
import Chat from '../pages/Chat';
import Profile from '../pages/Profile';
import NoMatch from '../pages/NoMatch';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <Fragment>
    <Switch>
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/chat' component={Chat} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
      <Route exact path='/profile' component={Profile} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
);

export default Routes;
