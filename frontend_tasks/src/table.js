import { addTask } from './actions';
import React from 'react';
import CountWithSubscription from './count';
import { connect } from 'react-redux';
// import { request } from './request';
import SignOutButton from './signOut'
import request from 'superagent';
import { browserHistory } from 'react-router';

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
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    request
      .get('http://localhost:5000/tasks')
      .withCredentials()
      .end((err, res) => {
        if (err) browserHistory.push(JSON.parse(res.text).location);
        var obj = JSON.parse(res.text);
        this.props.addTask(obj);
      });
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
        <SignOutButton />
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