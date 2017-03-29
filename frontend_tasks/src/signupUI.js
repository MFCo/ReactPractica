import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


        this.state = {
            user: '',
            pass: ''
        };
    }

    handleChangeUser(event) {
        this.setState({ user: event.target.value });
    }
    handleChangePass(event) {
        this.setState({ pass: event.target.value });
    }

    handleSubmit(event) {
        var req = new XMLHttpRequest();
        req.open("POST", 'http://localhost:5000/users', true);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(JSON.stringify({
            user: this.state.user,
            pass: this.state.pass
        }));
        req.onload = () => {
            if (req.status == 201) {
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
                    User:
                    <input type="text" value={this.state.user} onChange={this.handleChangeUser} />
                    Pass:
                    <input type="text" value={this.state.pass} onChange={this.handleChangePass} />
                </label>
                <input type="submit" value="Registrame" />
            </form>
        );
    }
}

export default SignupForm;