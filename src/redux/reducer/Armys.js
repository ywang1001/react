import * as types from '../action/types';
const initState = {
    page: 1,
    rpp: 7,
    list:[],
    loading: false,
    error: null
}

const armysReducer = function(state = initState, action) {
     switch(action.type) {
         case types.GET_CURRENTPAGE_SUCCESS:
             return{
                 ...state,
                 loading: false,
                 error: null,
                 list: action.data.slice((state.page-1)*state.rpp, state.page*state.rpp)
             }
         default:
             return state
     }
}

export default armysReducer;