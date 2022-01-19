import {
    ADD_BLOCKING_SUCCESS,
    CHANGE_BLOCKING_SUCCESS,
    DELETE_BLOCKING_SUCCESS,
    GET_BLOCKING_FAILURE,
    GET_BLOCKING_STARTED,
    GET_BLOCKING_SUCCESS
} from "@entities/block/model/actionTypes"
import {ADD_CLOTHING_SUCCESS} from "@entities/profile/model/actionTypes";

export const getBlockingSuccess = (blocking) => {
    return {
        type: GET_BLOCKING_SUCCESS,
        payload: {
            blocking
        }
    }
}

export const getBlockingStarted = () => {
    return {
        type: GET_BLOCKING_STARTED
    }
}

export const getBlockingFailure = error => {
    return {
        type: GET_BLOCKING_FAILURE,
        payload: {
            error
        }
    }
}

export const deleteBlockingSuccess = (link) => {
    return {
        type: DELETE_BLOCKING_SUCCESS,
        payload: {
            link
        }
    }
}

export const changeBlockingSuccess = (link) => {
    return {
        type: CHANGE_BLOCKING_SUCCESS,
        payload: {
            link
        }
    }
}

export const addBlockingSuccess = (blocking) => {
    return {
        type: ADD_BLOCKING_SUCCESS,
        payload: {
            blocking
        }
    }
}
