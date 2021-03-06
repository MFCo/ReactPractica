import React from 'react';
import './sprite.css';
import { connect } from 'react-redux';
var debounce = require('debounce');


var action = 'stand';
var count = 0;
var an_ID;
var fired = false;
var active = false;
var position = '';

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
        if (active)
            an_ID = window.requestAnimationFrame(debounce(this.step, this.props.data));
    }

    handleKeyDown = (event) => {
        if (!fired) {
            fired = true;
            active = true;
            if (event.key === 'd') {
                position = 'right';
                an_ID = window.requestAnimationFrame(this.step);
            }
            if (event.key === 'a') {
                position = 'left';
                an_ID = window.requestAnimationFrame(this.step);
            }
        }
    }

    handleKeyUp = (event) => {
        active = false;
        window.cancelAnimationFrame(an_ID);
        action = 'stand';
        this.forceUpdate();
        fired = false;
    }

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener("keyup", this.handleKeyUp);
    }

    render() {
        return (
            <div className={'sprite sprite_' + action + ' ' + position}> </div>
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