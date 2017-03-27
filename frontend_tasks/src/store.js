import { createStore } from 'redux';
import taskApp from './reducers'


let store = createStore(taskApp);

export default store;