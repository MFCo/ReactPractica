import { createStore } from 'redux';
import marioApp from './reducers';

let store = createStore(marioApp);

export default store;