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
        default:
            return state
    }
}

export default reducer;