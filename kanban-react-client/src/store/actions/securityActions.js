import axios from 'axios';
import * as actionTypes from './actionTypes';

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