export const ADD_TASK = 'ADD_TASK';
export const LOGGED = 'LOGGED';
export const LOGOUT = 'LOGOUT';

export const logOut = () => {
  return {
    type: LOGOUT
  }
}

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
