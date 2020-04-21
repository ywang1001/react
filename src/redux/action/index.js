import * as types from './types';
import axios from 'axios';

function setLoad(){
    return{
        type: types.SET_LOAD
    }
}

function setError(error) {
    return {
        type: types.SET_ERROR,
        error
    }
}

function getListSuccess(data) {
    return {
        type: types.GET_LIST_SUCCESS,
        data
    }
}

export const getList = function getList(){
    return (dispatch) => {
        dispatch(setLoad());
        axios.get('https://api.github.com/users?per_page=100').then(
            res => dispatch(getListSuccess(res.data))
        ).catch(
            error => dispatch(setError(error))
        )
    }
}

function getUserSuccess(data) {
   return{
       type: types.GET_USER_SUCCESS,
       data
   }
}

export const getUser = function getUser(login) {
    return (dispatch) => {
        dispatch(setLoad());
        axios.get(`https://api.github.com/users/${login}`).then(
            res => dispatch(getUserSuccess(res.data))
        ).catch(
            error => dispatch(setError(error))
        )
    }
}

function getEmailSuccess(data) {
    return {
        type: types.GET_EMAIL_SUCCESS,
        data
    }
}

export const getEmail = function getEmail(){
    return (dispatch) => {
        dispatch(setLoad());
        axios.get('http://api.haochuan.io/emails').then(
            res => dispatch(getEmailSuccess(res.data))
        ).catch(
             error => setError(error)
        )
    }
}