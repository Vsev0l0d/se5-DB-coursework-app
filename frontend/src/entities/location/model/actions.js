import {GET_LOCATIONS_FAILURE, GET_LOCATIONS_STARTED, GET_LOCATIONS_SUCCESS} from "@entities/location/model/actionsTypes"

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
