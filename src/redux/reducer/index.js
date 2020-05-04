import {combineReducers} from 'redux';
import listReducer from './list';
import userReducer from './user';
import emailReducer from './email';
import armysReducer from './Armys';
import armyReducer from './Army';
import countReducer from './Counter';

const reducer = combineReducers({
    list: listReducer,
    user: userReducer,
    email: emailReducer,
    armys: armysReducer,
    army: armyReducer,
    counter: countReducer
})

export default reducer;