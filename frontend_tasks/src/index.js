import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, withRouter } from 'react-router'
import TableWithSubscription from './table';
import NameFormConnected from './form';
import LoginForm from './loginUI';
import SignupForm from './signupUI';
import { Provider } from 'react-redux';
import store from './store';

function requireAuth(nextState, replaceState) {
  if (!store.getState().logged) {
    replaceState('/login');
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route exact path="/" component={TableWithSubscription} onEnter={requireAuth}>
        <Route path="/newtask" component={NameFormConnected} onEnter={requireAuth} />
      </Route>
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
    </Router >
  </Provider>,
  document.getElementById("root")

);