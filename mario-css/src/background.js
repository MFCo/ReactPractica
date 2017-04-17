import React from 'react';
import './sprite.css';
import Mario from './mario';
import { connect } from 'react-redux';
var debounce = require('debounce');

var count = 0;
var an_ID;
var fired = false;
var active = false;
var position = '';

class Background extends React.Component {
    constructor(props) {
        super(props);
        this.step = this.step.bind(this);
    }

    step() {
        if (position === 'right') count++;
        if (position === 'left') count--;
        if (count === -1) count=10;
        count = count % 11;
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
        this.forceUpdate();
        fired = false;
    }

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener("keyup", this.handleKeyUp);
    }
    render() {
        return (
            <div className={'background  background_forest background_' + count}>
                <div className={'center'} >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        data: store.debounceTimer
    }
}

const BackgroundConnected = connect(mapStateToProps)(Background);


export default BackgroundConnected;