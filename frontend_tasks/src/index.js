import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route } from 'react-router'
import TableWithSubscription from './table';
import NameFormConnected from './form';
import LoginForm from './loginUI';
import SignupForm from './signupUI';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route exact path="/" component={TableWithSubscription} >
        <Route path="/newtask" component={NameFormConnected} />
      </Route>
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
    </Router >
  </Provider>,
  document.getElementById("root")

);