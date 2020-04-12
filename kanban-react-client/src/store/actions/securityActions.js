import axios from 'axios';
import * as actionTypes from './actionTypes';
import setJWTToken from '../../securityUtils/setJWTToken';
import jwt_decode from 'jwt-decode';

export const createNewUser = (newUser, history) => {
    return async dispatch => {
        try {
            await axios.post('/api/users/register', newUser)
            history.push('/login')
            dispatch({
                type: actionTypes.GET_ERRORS,
                payload: {}
            })
        } catch(err) {
            dispatch({
                type: actionTypes.GET_ERRORS,
                payload: err.response.data
            })
        }
    }
}

export const login = LoginRequest => {
    return async dispatch => {
        try {
            const res = await axios.post('/api/users/login', LoginRequest)
            const { token } = res.data
            localStorage.setItem('jwtToken', token)
            setJWTToken(token)
            const decoded = jwt_decode(token)
            dispatch({
                type: actionTypes.SET_CURRENT_USER,
                payload: decoded
            })
        } catch(err) {
            dispatch({
                type:actionTypes.GET_ERRORS,
                payload: err.reponse.data
            })
        }
    }
}