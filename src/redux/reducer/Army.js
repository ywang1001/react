import * as actions from '../action/index';
const initState = {
    army:[],
    loading: false,
    error: null
}

const armyReducer = function(state = initState, action) {
     switch(action.type) {
         default:
             return state
     }
}

export default armyReducer;