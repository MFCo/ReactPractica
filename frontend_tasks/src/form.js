import React, { Component } from 'react';

var EventBus = require('eventbusjs');


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
        //this.props.setTable(JSON.parse(this.state.value));
        EventBus.dispatch("table updated", JSON.parse(this.state.value));
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
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;