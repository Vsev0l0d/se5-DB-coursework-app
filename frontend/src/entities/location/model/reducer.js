import {
    GET_LOCATIONS_FAILURE,
    GET_LOCATIONS_STARTED,
    GET_LOCATIONS_SUCCESS
} from "@entities/location/model/actionsTypes"

export const initialState = {
    loading: false,
    locations: [],
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOCATIONS_STARTED:
            return {
                ...state,
                loading: true
            }
        case GET_LOCATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                locations: [...state.locations, ...action.payload.locations]
            }
        case GET_LOCATIONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}