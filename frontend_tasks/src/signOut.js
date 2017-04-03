import React from 'react';
var Button = require('react-button');
import { browserHistory } from 'react-router';
import { logOut } from './actions';
import { connect } from 'react-redux';




class SignOutButton extends React.Component {
    onButtonPress = () => {
        var cookies = document.cookie.split(";");

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
        this.props.logOut();
        browserHistory.push('/login');
    };

    render() {
        return (
            <Button onClick={this.onButtonPress} >SignOut</Button>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => {
            dispatch(logOut())
        }
    };
}


const SignOutButtonConnected = connect(undefined, mapDispatchToProps)(SignOutButton);
export default SignOutButtonConnected;