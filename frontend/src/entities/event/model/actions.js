import {GET_EVENTS_FAILURE, GET_EVENTS_STARTED, GET_EVENTS_SUCCESS} from "@entities/event/model/actionTypes"

export const getEventsSuccess = (events) => {
    return {
        type: GET_EVENTS_SUCCESS,
        payload: {
            events
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