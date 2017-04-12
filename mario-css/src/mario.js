import React from 'react';
import './sprite.css';
import { connect } from 'react-redux';
var debounce = require('debounce');


var action;
var count = 0;
var an_ID;

class Mario extends React.Component {
    constructor(props) {
        super(props);
        this.step = this.step.bind(this);
    }

    step() {
        switch (count) {
            case 0: action = 'stand'; break;
            case 1: action = 'run'; break;
            case 2: action = 'walk'; break;
            default: action = 'stand'; break;
        }
        count = (count + 1) % 3;
        this.forceUpdate();
        window.requestAnimationFrame(debounce(this.step, this.props.data));
    }

    componentDidMount() {
        window.requestAnimationFrame(this.step);
    }

    render() {
        return (
            <div tabIndex='1' className={'sprite sprite_' + action}> </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        data: store.debounceTimer
    }
}

const MarioConnected = connect(mapStateToProps)(Mario);


export default MarioConnected;