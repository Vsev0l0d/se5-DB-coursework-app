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

export const getProfileSuccess = (profile) => {
    return {
        type: GET_PROFILE_SUCCESS,
        payload: {
            profile
        }
    }
}

export const getProfileStarted = () => {
    return {
        type: GET_PROFILE_STARTED
    }
}

export const getProfileFailure = (error) => {
    return {
        type: GET_PROFILE_FAILURE,
        payload: {
            error
        }
    }
}

export const getWeaponsSuccess = (weapons) => {
    return {
        type: GET_WEAPONS_SUCCESS,
        payload: {
            weapons
        }
    }
}

export const getWeaponsStarted = () => {
    return {
        type: GET_WEAPONS_STARTED
    }
}

export const getWeaponsFailure = (error) => {
    return {
        type: GET_WEAPONS_FAILURE,
        payload: {
            error
        }
    }
}

export const getClothingSuccess = (clothing) => {
    return {
        type: GET_CLOTHING_SUCCESS,
        payload: {
            clothing
        }
    }
}

export const getClosingStarted = () => {
    return {
        type: GET_CLOTHING_STARTED
    }
}

export const getClosingFailure = (error) => {
    return {
        type: GET_CLOTHING_FAILURE,
        payload: {
            error
        }
    }
}