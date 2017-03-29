import { combineReducers } from 'redux'
import { ADD_TASK, LOGGED } from './actions';

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
            console.log("asdasd");
            return true;
        }
        default:
            return false;
    }
}

const taskApp = combineReducers({ tasks, logged })

export default taskApp;