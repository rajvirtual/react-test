import React from 'react'
import {render} from 'react-dom';
import Router from 'react-router';
import routes from './routes/routes';
var {useBasename, createHistory} = require('history');
import createBrowserHistory from 'history/lib/createBrowserHistory';

var Parse = require('parse').Parse;

const history = useBasename(createHistory)({
  basename: '/'
})
render((
  <Router history={history}>
    {routes}
  </Router>
), document.getElementById('app'));
