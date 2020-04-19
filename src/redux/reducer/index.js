import {combineReducers} from 'redux';
import listReducer from './list';
import userReducer from './user';

const reducer = combineReducers({
    list: listReducer,
    user: userReducer
})

export default reducer;