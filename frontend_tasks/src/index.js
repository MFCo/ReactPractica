import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link, withRouter } from 'react-router'
import TableWithSubscription from './table';
import NameForm from './form';


 ReactDOM.render(
        <Router history={browserHistory}>
          <Route exact path="/" component={TableWithSubscription} data={[]}>
                <Route path="/newtask" component={NameForm} />
          </Route>
        </Router>,
        document.getElementById("root")
      
);