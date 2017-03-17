import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link, withRouter } from 'react-router'
import Table from './table';
import NameForm from './form';

const Hola = () => (
  <div>
    <h2>Hola</h2>
  </div>
)

const NewTask = () => (
  <div>
    <h2>TODO AGREGAR</h2>
  </div>
)

 ReactDOM.render(
        <Router history={browserHistory}>

          <Route exact path="/" component={Table} data={[]}>
                <Route path="/hola" component={Hola} />
                <Route path="/newtask" component={NameForm} />
          </Route>
        </Router>,
        document.getElementById("root")
      
);