import React from 'react';
import App from '../components/App';
import Login from '../components/Login';
import Users from '../components/Users';
import AddUser from '../components/AddUser';
import { Router, Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="users" component={Users}/>
    <Route path="users/:userid" component={AddUser}/>
    <Route path="adduser" component={AddUser}/>
  </Route>
);
