import { combineReducers } from 'redux'
import { ADD_TASK, LOGGED, LOGOUT } from './actions';

function tasks(state = [], action) {
    switch (action.type) {
        case ADD_TASK: {
            return (state.slice().concat(action.task));
        }
        default:
            return state;
    }
}

function logged(state = false, action) {
    switch (action.type) {
        case LOGGED: {
            return true;
        }
        default:
            return false;
    }
}

const rootApp = combineReducers({ tasks, logged })

const taskApp = (state, action) => {
    if (action.type === LOGOUT){
        state = undefined;
    }
    return rootApp(state,action);
}

export default taskApp;