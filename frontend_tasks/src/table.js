import { addTask } from './actions';
import React, { Component } from 'react';
import CountWithSubscription from './count';
import { connect } from 'react-redux';


class TableRow extends React.Component {
  render() {
    const { data } = this.props;
    const row = data.map((data) =>
      <tr key={data._id}>
        <td>{data.name}</td>
        <td>{data.user}</td>
        <td>{data.status}</td>
        <td>{data.start}</td>
      </tr>
    )
    return (
      <h3>{row}</h3>
    );
  }
}

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", 'http://localhost:5000/tasks', true);
    xmlhttp.withCredentials = true;
    xmlhttp.onload = () => {
      var obj = JSON.parse(xmlhttp.response);
      this.props.addTask(obj);
    };
    xmlhttp.onerror = function() {
      console.log(arguments);
    }
    xmlhttp.send(null);
  }

  renderChildren(props) {
    return React.Children.map(props.children, child => {
      return child
    })
  }

  render() {
    return (
      <table>
        <TableRow data={this.props.data} />
        {this.renderChildren(this.props)}
        <CountWithSubscription />
      </table>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    data: store.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (t) => {
      dispatch(addTask(t))
    }
  };
}

const TableWithSubscription = connect(mapStateToProps, mapDispatchToProps)(Table);

export default TableWithSubscription;