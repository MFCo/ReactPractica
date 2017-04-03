import { Link } from 'react-router'
import { connect } from 'react-redux';
import { logged } from './actions';
import React from 'react';
import request from 'superagent';
import { browserHistory } from 'react-router';


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
        request
            .post('http://localhost:5000/login')
            .withCredentials()
            .send({
                user: this.state.user,
                pass: this.state.pass
            })
            .end((err, res) => {
                if (err) browserHistory.push(JSON.parse(res.text).location);
                this.props.logged();
                browserHistory.push('/newtask');

            });
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