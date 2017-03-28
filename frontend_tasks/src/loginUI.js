import { Link } from 'react-router'

import React, { Component } from 'react';

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
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", 'http://localhost:5000/users', true);

        xmlhttp.onload = () => {
            var obj = JSON.parse(xmlhttp.response);
            var existe = false;
            obj.forEach((element) => {
                if (element.user == this.state.user)
                    if (element.pass == this.state.pass)
                        alert("LOGUEADISSSIMO")
                    else
                        alert("MALA PASS")
            })
            if (!existe) alert("NO EXISTE");
        };
        xmlhttp.send(null);
        xmlhttp.onerror = function () {
            alert("ERROR");
        }
        event.preventDefault();
    }

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

export default LoginForm;