import {
    GET_LOCATIONS_FAILURE,
    GET_LOCATIONS_STARTED,
    GET_LOCATIONS_SUCCESS, GET_PERSONAGE_TYPES_FAILURE, GET_PERSONAGE_TYPES_STARTED, GET_PERSONAGE_TYPES_SUCCESS
} from "@entities/optional/model/actionsTypes"

export const initialState = {
    loading: false,
    locations: [],
    personageTypes: [],
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
            case GET_PERSONAGE_TYPES_STARTED:
            return {
                ...state,
                loading: true
            }
        case GET_PERSONAGE_TYPES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                personageTypes: [...state.personageTypes, ...action.payload.types]
            }
        case GET_PERSONAGE_TYPES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}