import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
    project_tasks: [],
    project_task: {}
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.GET_BACKLOG:
            return {
                ...state,
                project_tasks: action.payload
            }
        case actionTypes.GET_PROJECT_TASK:
            return {
                ...state,
                project_task: action.payload
            }
        case actionTypes.DELETE_PROJECT_TASK:
            return {
                ...state,
                project_tasks: state.project_tasks.filter(
                  project_task => project_task.projectSequence !== action.payload
                )
            }
        default:
            return state
    }
}

export default reducer;