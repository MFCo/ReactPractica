export const ADD_TASK = 'ADD_TASK';
import store from './store';


export function addTask(task) {
  store.dispatch({ type: ADD_TASK, task });
}