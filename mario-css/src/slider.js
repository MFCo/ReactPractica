import React from 'react';
const Slider = require('rc-slider');
import { connect } from 'react-redux';
import 'rc-slider/assets/index.css';
import { setTime } from './actions';

const SliderMario = React.createClass({
    onSliderChange: function (value) {
        this.props.setTime(value);
    },
    render: function () {
        return <Slider value={this.props.data} onChange={this.onSliderChange} onAfterChange={this.onAfterChange} />;
    },
});

const mapStateToProps = (store) => {
    return {
        data: store.debounceTimer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTime: (t) => {
            dispatch(setTime(t))
        }
    };
}

const SliderMarioConnected = connect(mapStateToProps, mapDispatchToProps)(SliderMario);

export default SliderMarioConnected;
