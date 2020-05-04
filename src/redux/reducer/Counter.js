import * as types from '../action/types';
const initState = {
    number: 0
}

const counterReducer = function(state = initState, action) {
    switch(action.type) {
        case types.ADD_SUCCESS:
            return{
                ...state,
                number: state.number+1
            }
        
        case types.SUB_SUCCESS:
            return{
                ...state,
                number: state.number-1
            }

        default:
            return state
    }
}

export default counterReducer;