import { addTask } from './actions';
import React from 'react';
import { connect } from 'react-redux';
import request from 'superagent';
import { browserHistory } from 'react-router';

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
    request
      .post('http://localhost:5000/tasks')
      .withCredentials()
      .send(this.state.value)
      .end((err, res) => {
        if (err) browserHistory.push(JSON.parse(res.text).location);
        this.props.addTask(JSON.parse(this.state.value));
      }
    });
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