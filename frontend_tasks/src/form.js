import { addTask } from './actions';
import React, { Component } from 'react';
import { connect } from 'react-redux';


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
    var req = new XMLHttpRequest();
    req.open("POST", 'http://localhost:5000/tasks', true);
    req.setRequestHeader("Content-Type", "application/json");
    req.send(this.state.value);
    req.onload = () => {
      if (req.status == 201) {
        this.props.addTask(JSON.parse(this.state.value));
        alert(req.status);
      }
    }
    req.onerror = function () {
      alert("ERROR");
    }
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