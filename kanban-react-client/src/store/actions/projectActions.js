import * as actionTypes from './actionTypes';
import axios from 'axios';

export const createProject = (project, history) => {
    return async dispatch => {
        try {
            const res = await axios.post('http://localhost:8080/api/project', project)
            history.push('/dashboard')
        } catch (err) {
            dispatch({
                type: actionTypes.GET_ERRORS,
                payload: err.response.data
            })
        }
    }
}
