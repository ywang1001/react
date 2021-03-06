import * as types from '../action/types';

const initState = {
    data: [],
    loading: false,
    error: null
}

const emailReducer = function(state = initState, action) {
    switch(action.type) {
        case types.SET_LOAD:
            return{
                ...state,
                loading: true,
                error: null
            }
        
        case types.SET_ERROR:
            return{
                ...state,
                loading: false,
                error: action.error
            }

        case types.GET_EMAIL_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null,
                data: action.data
            }

        default: 
            return state;
    }
}

export default emailReducer;