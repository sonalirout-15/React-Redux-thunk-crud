import axios from 'axios';
import * as types from './actionType';

const getAdmin = (admin) => ({
    type: types.GET_ADMIN,
    payload : admin,
});

const adminDeleted = () => ({
    type: types.DELETE_ADMIN,
})

const adminAdded = () => ({
    type: types.CREATE_ADMIN,
})

const adminUpdated = () => ({
    type: types.UPDATE_ADMIN,
})

const singleAdmin = (adminData) => ({
    type: types.GET_SINGLE_ADMIN,
    payload : adminData
})

export const loadAdmin = () => {
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}`).then((resp) => {
            console.log('resp¬¬¬¬¬', resp)
            dispatch(getAdmin(resp.data.data))
        }).catch((error) => console.log(error))
    }
}

export const deleteAdmin = (id) => {
    return function(dispatch){
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
            console.log('resp¬¬¬¬¬', resp)
            dispatch(adminDeleted());
            dispatch(loadAdmin())
        }).catch((error) => console.log(error))
    }
}

export const addAdmin = (admin) => {
    return function(dispatch){
        axios.post(`${process.env.REACT_APP_API}/create`, admin).then((resp) => {
            console.log('resp¬¬¬¬¬', resp)
            dispatch(adminAdded());
        }).catch((error) => console.log(error))
    }
}


export const getSingleAdmin = (id) => {
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
            console.log('resp¬¬¬¬¬', resp)
            dispatch(singleAdmin(resp.data.data));
        }).catch((error) => console.log(error))
    }
}

export const updateAdmin = (admin , id) => {
    return function(dispatch){
        axios.post(`${process.env.REACT_APP_API}/update/${id}`, admin).then((resp) => {
            console.log('resp¬¬¬¬¬', resp)
            dispatch(adminUpdated());
        }).catch((error) => console.log(error))
    }
}