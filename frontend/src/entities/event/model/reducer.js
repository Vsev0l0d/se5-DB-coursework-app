import {
    ADD_EVENT_SUCCESS,
    CHANGE_EVENT_SUCCESS,
    DELETE_EVENT_SUCCESS,
    GET_EVENTS_FAILURE,
    GET_EVENTS_STARTED,
    GET_EVENTS_SUCCESS
} from "@entities/event/model/actionTypes"

export const initialState = {
    loading: false,
    events: [],
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EVENTS_STARTED:
            return {
                ...state,
                loading: true
            }
        case GET_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                events: [...state.events, ...action.payload.events]
            }
        case GET_EVENTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case ADD_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                events: [...state.events, action.payload.events]
            }
        case DELETE_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                events: state.events.filter(event => event["_links"].self.href !== action.payload.link)
            }
        case CHANGE_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                events: [...state.events.filter(event => event["_links"].self.href !== action.payload.link), action.payload.event]
            }
        default:
            return state
    }
}