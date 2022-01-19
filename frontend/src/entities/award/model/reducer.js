import {
    ADD_AWARD_SUCCESS, DELETE_AWARD_SUCCESS,
    GET_AWARDS_FAILURE,
    GET_AWARDS_STARTED,
    GET_AWARDS_SUCCESS
} from "@entities/award/model/actionsTypes";

export const initialState = {
    loading: false,
    awards: [],
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AWARDS_STARTED:
            return {
                ...state,
                loading: true
            }
        case GET_AWARDS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                awards: [...state.awards, ...action.payload.awards]
            }
        case GET_AWARDS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case ADD_AWARD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                awards: [...state.awards, action.payload.awards]
            }
        case DELETE_AWARD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                awards: state.awards.filter(award => award["_links"].self.href !== action.payload.link)
            }
        default:
            return state
    }
}