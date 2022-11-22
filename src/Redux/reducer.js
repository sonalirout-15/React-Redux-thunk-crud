import * as types from './actionType';

const initialState =  {
    admin : [],
    adminData : [],
    loading : true
}

const adminReducers = (state = initialState, action) => {
    switch(action.type){
        case types.GET_ADMIN:
            return{
                ...state,
                admin : action.payload,
                loading : false
            }
        case types.DELETE_ADMIN:
            return{
                ...state,
                loading : false
            }
        case types.CREATE_ADMIN:
        case types.UPDATE_ADMIN:
            return {
                ...state,
                loading: false
            }
        case types.GET_SINGLE_ADMIN:
            return{
                ...state,
                adminData : action.payload,
                loading : false
            }
        default:
            return state;
    }
}

export default adminReducers;