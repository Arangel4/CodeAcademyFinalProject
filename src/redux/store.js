// This file ties the reducers and the default state definitions together
import { createStore } from 'redux';
import reducers from './reducers';
import state from './state';

export default createStore(reducers, state);