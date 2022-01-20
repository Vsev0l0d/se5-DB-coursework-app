import {
    GET_LOCATIONS_FAILURE,
    GET_LOCATIONS_STARTED,
    GET_LOCATIONS_SUCCESS,
    GET_PERSONAGE_TYPES_FAILURE,
    GET_PERSONAGE_TYPES_STARTED,
    GET_PERSONAGE_TYPES_SUCCESS
} from "@entities/optional/model/actionsTypes"

export const getLocationsSuccess = (locations) => {
    return {
        type: GET_LOCATIONS_SUCCESS,
        payload: {
            locations
        }
    }
}

export const getLocationsStarted = () => {
    return {
        type: GET_LOCATIONS_STARTED
    }
}

export const getLocationsFailure = (error) => {
    return {
        type: GET_LOCATIONS_FAILURE,
        payload: {
            error
        }
    }
}

export const getPersonageTypesSuccess = (types) => {
    return {
        type: GET_PERSONAGE_TYPES_SUCCESS,
        payload: {
            types
        }
    }
}

export const getPersonageTypesStarted = () => {
    return {
        type: GET_PERSONAGE_TYPES_STARTED
    }
}

export const getPersonageFailure = (error) => {
    return {
        type: GET_PERSONAGE_TYPES_FAILURE,
        payload: {
            error
        }
    }
}
