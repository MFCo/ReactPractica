import React, { Component } from 'react';
import withSubscription from './subscriptor';

class Count extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h2> {this.props.data} </h2>
    );
  }
}

function selectData(store) {
  return store.getState().tasks.length;
}

const CountWithSubscription = withSubscription(Count, selectData);


export default CountWithSubscription;