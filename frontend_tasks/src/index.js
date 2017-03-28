import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link, withRouter } from 'react-router'
import TableWithSubscription from './table';
import NameFormConnected from './form';
import LoginForm from './loginUI'
import SignupForm from './signupUI'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route exact path="/" component={TableWithSubscription} data={[]}>
      <Route path="/newtask" component={NameFormConnected} />
    </Route>
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={SignupForm} />
  </Router>,
  document.getElementById("root")

);