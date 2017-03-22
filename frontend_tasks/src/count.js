import React, { Component } from 'react';
import withSubscription from './subscriptor';

class Count extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h2> {this.props.data.length} </h2>
    );
  }
}

const CountWithSubscription = withSubscription(Count);

export default CountWithSubscription;