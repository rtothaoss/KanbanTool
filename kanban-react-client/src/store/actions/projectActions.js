import * as actionTypes from './actionTypes';
import axios from 'axios';

export const createProject = (project, history) => {
    return async dispatch => {
        try {
            await axios.post('/api/project', project)
            history.push('/dashboard')
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

export const getProjects = () => {
    return async dispatch => {
        const res = await axios.get('/api/project/all')
        dispatch({
            type: actionTypes.GET_PROJECTS,
            payload: res.data
        })
    }
}

export const getProject = (id, history) => {
    return async dispatch => {
        try {
            const res = await axios.get(`/api/project/${id}`)
            dispatch({
                type: actionTypes.GET_PROJECT,
                payload: res.data
            })
        } catch(err) {
            history.push('/dashboard')
        }

    }
}

export const updateProject = (id, history) => {
    return async dispatch => {
            const res = await axios.put(`/api/project/${id}`)
            dispatch({
                type: actionTypes.GET_PROJECT,
                payload: res.data
            })
            
    }
}

export const deleteProject = (id) => {
    return async dispatch => {
    if (
        window.confirm(
          "Are you sure? This will delete the project and all the data related to it"
        )
      ) {
        await axios.delete(`/api/project/${id}`);
        dispatch({
          type: actionTypes.DELETE_PROJECT,
          payload: id
        });
      }
    }
}
