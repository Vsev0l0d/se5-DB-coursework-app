import {
    GET_CLOTHING_FAILURE,
    GET_CLOTHING_STARTED,
    GET_CLOTHING_SUCCESS,
    GET_PROFILE_FAILURE,
    GET_PROFILE_STARTED,
    GET_PROFILE_SUCCESS,
    GET_WEAPONS_FAILURE,
    GET_WEAPONS_STARTED,
    GET_WEAPONS_SUCCESS
} from "@entities/profile/model/actionTypes"

export const initialState = {
    loading: false,
    error: null,
    profile: [],
    weapons: [],
    clothing: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE_STARTED:
            return {
                ...state,
                loading: true
            }
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                profile: [...state.profile, action.payload.profile]
            }
        case GET_PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case GET_WEAPONS_STARTED:
            return {
                ...state,
                loading: true
            }
        case GET_WEAPONS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                weapons: [...state.weapons, ...action.payload.weapons]
            }
        case GET_WEAPONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case GET_CLOTHING_STARTED:
            return {
                ...state,
                loading: true
            }
        case GET_CLOTHING_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                clothing: [...state.clothing, ...action.payload.clothing]
            }
        case GET_CLOTHING_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}