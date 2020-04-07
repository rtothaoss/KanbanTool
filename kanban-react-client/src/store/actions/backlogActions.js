import axios from 'axios'
import * as actionTypes from './actionTypes'

export const addProjectTask = (backlog_id, project_task, history) => {
    return async dispatch => {
        try{
            await axios.post(`/api/backlog/${backlog_id}`, project_task)
            history.push(`/projectBoard/${backlog_id}`)
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