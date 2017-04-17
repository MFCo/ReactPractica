import { combineReducers } from 'redux';
import { SET_TIME } from './actions';

function debounceTimer(state = 80, action) {
    switch (action.type) {
        case SET_TIME: {
            return action.debounceTime;
        }
        default: {
            return state;
        }
    }
}

const marioApp = combineReducers({ debounceTimer });

export default marioApp;

