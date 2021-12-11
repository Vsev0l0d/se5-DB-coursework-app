import {GET_INVITATIONS_FAILURE, GET_INVITATIONS_STARTED, GET_INVITATIONS_SUCCESS} from "./actionTypes"

export const initialState = {
    loading: false,
    invitations: [],
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INVITATIONS_STARTED:
            return {
                ...state,
                loading: true
            }
        case GET_INVITATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                invitations: [...state.invitations, ...action.payload.invitations]
            }
        case GET_INVITATIONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}