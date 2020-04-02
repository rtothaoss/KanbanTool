import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
    errors: false
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.GET_ERRORS:
            return {
                errors: action.payload
            }
        default:
            return state
    }
}

export default reducer;