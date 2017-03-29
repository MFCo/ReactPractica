import store from './store';
export const ADD_TASK = 'ADD_TASK';
export const LOGGED = 'LOGGED';

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    task: task
  }
}

export const logged = () => {
  return {
    type: LOGGED
  }
}
