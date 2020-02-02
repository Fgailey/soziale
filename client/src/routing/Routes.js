import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/dashboard/Dashboard';
import CreateProfile from '../components/profile-forms/CreateProfile';
import EditProfile from '../components/profile-forms/EditProfile';
import Chat from '../pages/Chat';
import Profile from '../pages/profile/Profile';
import Profiles from '../pages/profiles/Profiles';
import NoMatch from '../pages/NoMatch';
import Posts from '../components/posts/Posts';
import Post from '../components/post/Post';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <Fragment>
    <Switch>
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/chat' component={Chat} />
      <Route exact path='/profiles' component={Profiles} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
      <PrivateRoute exact path='/create-profile' component={CreateProfile} />
      <PrivateRoute exact path='/edit-profile' component={EditProfile} />
      <PrivateRoute exact path='/posts' component={Posts} />
      <PrivateRoute exact path='/posts/:id' component={Post} />
      <PrivateRoute exact path='/chat' component={Chat} />
      <Route exact path='/profile/:id' component={Profile} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
);

export default Routes;
