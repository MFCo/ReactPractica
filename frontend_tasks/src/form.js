import { addTask } from './actions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { request } from './request';


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    request("POST", 'http://localhost:5000/tasks', (req) => {
      if (req.status == 201) {
        this.props.addTask(JSON.parse(this.state.value));
        alert(req.status);
      }
    },
      this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          New Task:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (t) => {
      dispatch(addTask(t))
    }
  };
}

const NameFormConnected = connect(undefined, mapDispatchToProps)(NameForm);

export default NameFormConnected;