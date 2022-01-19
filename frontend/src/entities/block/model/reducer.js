import {
    ADD_BLOCKING_SUCCESS,
    CHANGE_BLOCKING_SUCCESS,
    DELETE_BLOCKING_SUCCESS,
    GET_BLOCKING_FAILURE,
    GET_BLOCKING_STARTED,
    GET_BLOCKING_SUCCESS
} from "@entities/block/model/actionTypes"

export const initialState = {
    loading: false,
    blocking: [],
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BLOCKING_STARTED:
            return {
                ...state,
                loading: true
            }
        case GET_BLOCKING_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                blocking: [...state.blocking, ...action.payload.blocking]
            }
        case GET_BLOCKING_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case DELETE_BLOCKING_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                blocking: state.blocking.filter(blocking => blocking["_links"].self.href !== action.payload.link)
            }
        case CHANGE_BLOCKING_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                blocking: [...state.blocking.filter(blocking => blocking["_links"].self.href !== action.payload.link), action.payload.event]
            }
        case ADD_BLOCKING_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                blocking: [...state.blocking, action.payload.blocking]
            }
        default:
            return state
    }
}