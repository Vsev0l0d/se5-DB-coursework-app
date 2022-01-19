import {
    ADD_EVENT_SUCCESS,
    CHANGE_EVENT_SUCCESS,
    DELETE_EVENT_SUCCESS,
    GET_EVENTS_FAILURE,
    GET_EVENTS_STARTED,
    GET_EVENTS_SUCCESS
} from "@entities/event/model/actionTypes"

export const getEventsSuccess = (events) => {
    return {
        type: GET_EVENTS_SUCCESS,
        payload: {
            events
        }
    }
}

export const addEventSuccess = (event) => {
    return {
        type: ADD_EVENT_SUCCESS,
        payload: {
            event
        }
    }
}

export const getEventsStarted = () => {
    return {
        type: GET_EVENTS_STARTED
    }
}

export const getEventsFailure = error => {
    return {
        type: GET_EVENTS_FAILURE,
        payload: {
            error
        }
    }
}

export const deleteEventSuccess = (link) => {
    return {
        type: DELETE_EVENT_SUCCESS,
        payload: {
            link
        }
    }
}

export const changeEventSuccess = (event, link) => {
    return {
        type: CHANGE_EVENT_SUCCESS,
        payload: {
            event,
            link
        }
    }
}