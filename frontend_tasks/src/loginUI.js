import { Link } from 'react-router'
import { connect } from 'react-redux';
import { logged } from './actions';
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';


class LoginForm extends React.Component {
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
        req.open("POST", 'http://localhost:5000/login', true);
        //req.withCredentials = true;
        req.setRequestHeader("Content-Type", "application/json");
        req.send(JSON.stringify({
            user: this.state.user,
            pass: this.state.pass
        }));
        req.onload = () => {
            if (req.status == 201) {
                this.props.logged();
                browserHistory.push('/newtask');
            }
            if (req.status == 400 || req.status == 500) {
                alert("NO EXISTE COMBINACION");
            }
        }
        req.onerror = function () {
            alert("ERROR");
        }
        event.preventDefault();

    };


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        User:
                    <input type="text" value={this.state.user} onChange={this.handleChangeUser} />
                        Pass:
                    <input type="text" value={this.state.pass} onChange={this.handleChangePass} />
                    </label>
                    <input type="submit" value="Logueame" />
                </form>
                <span>
                    <Link to="/signup"> Click to signup </Link>
                </span>
            </div >
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logged: () => {
            dispatch(logged())
        }
    };
}


const LoginFormConnected = connect(undefined, mapDispatchToProps)(LoginForm)
export default LoginFormConnected;