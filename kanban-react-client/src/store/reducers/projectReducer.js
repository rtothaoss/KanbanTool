import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
    projects: [],
    project: {}
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case actionTypes.GET_PROJECT:
            return {
                ...state,
                project: action.payload
            }
        case actionTypes.UPDATE_PROJECT:
            return {
                ...state,
                project: action.payload
            }
        case actionTypes.DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(project => project.projectIdentifier !== action.payload)
            }
        default:
            return state
    }
}

export default reducer;