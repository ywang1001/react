import {combineReducers} from 'redux';
import listReducer from './list';
import userReducer from './user';
import emailReducer from './email';

const reducer = combineReducers({
    list: listReducer,
    user: userReducer,
    email: emailReducer
})

export default reducer;