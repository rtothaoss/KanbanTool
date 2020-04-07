import axios from 'axios'
import * as actionTypes from './actionTypes'

export const addProjectTask = (backlog_id, project_task, history) => {
    return async dispatch => {
        try {
            await axios.post(`/api/backlog/${backlog_id}`, project_task)
            history.push(`/projectBoard/${backlog_id}`)
            dispatch({
                type: actionTypes.GET_ERRORS,
                payload: {}
            })
        } catch (err) {
            dispatch({
                type: actionTypes.GET_ERRORS,
                payload: err.response.data
            })
        }
    }
}

export const getBacklog = (backlog_id) => {
    return async dispatch => {
        try {
            const res = await axios.get(`/api/backlog/${backlog_id}`)
            dispatch({
                type: actionTypes.GET_BACKLOG,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: actionTypes.GET_ERRORS,
                payload: err.response.data
            })
        }
    }
}

export const getProjectTask = (backlog_id, pt_id, history) => {
    return async dispatch => {
        try {
            const res = await axios.get(`/api/backlog/${backlog_id}/${pt_id}`)
            dispatch({
                type: actionTypes.GET_PROJECT_TASK,
                payload: res.data
            })
        } catch (err) {
            history.push('/dashboard')
        }
    }
}