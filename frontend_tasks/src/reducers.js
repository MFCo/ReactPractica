import { combineReducers } from 'redux'
import { ADD_TASK } from './actions';

function tasks(state = [], action) {
    switch (action.type) {
        case ADD_TASK:{
            console.log("erere");
            return (state.slice().concat(action.task));
        }
        default:
            return state;
    }
}

const taskApp = combineReducers({ tasks })

export default taskApp;