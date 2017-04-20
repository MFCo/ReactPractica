'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initStore = exports.startClock = exports.reducer = undefined;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = exports.reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { lastUpdate: 0, light: false };
    var action = arguments[1];

    switch (action.type) {
        case 'TICK':
            return { lastUpdate: action.ts, light: !!action.light };
        default:
            return state;
    }
};

var startClock = exports.startClock = function startClock() {
    return function (dispatch) {
        return setInterval(function () {
            return dispatch({ type: 'TICK', light: true, ts: Date.now() });
        }, 800);
    };
};

var initStore = exports.initStore = function initStore(initialState) {
    return (0, _redux.createStore)(reducer, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};