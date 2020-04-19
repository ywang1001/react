import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer/index';
import thunk from 'redux-thunk';

const logger = store => next => action => {
    console.log('prev state, ', store.getState());
    console.log('action is , ', action);
    next(action);
    console.log('state after, ', store.getState());
}

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;