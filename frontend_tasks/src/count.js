import React, { Component } from 'react';
import { connect } from 'react-redux';


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

const mapStateToProps = (store) => {
  return {
    data: store.tasks.length
  }
}

const CountWithSubscription = connect(mapStateToProps)(Count);


export default CountWithSubscription;