import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Chat from '../pages/Chat';
import Profile from '../pages/Profile';
import NoMatch from '../pages/NoMatch';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <Fragment>
    <Switch>
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
      <PrivateRoute exact path='/chat' component={Chat} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
);

export default Routes;
