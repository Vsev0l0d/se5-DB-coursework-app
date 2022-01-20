import axios from "axios"
import {
    getLocationsFailure,
    getLocationsStarted,
    getLocationsSuccess,
    getPersonageFailure,
    getPersonageTypesStarted,
    getPersonageTypesSuccess
} from "@entities/optional/model/actions"

export const getLocations = () => {
    return dispatch => {
        dispatch(getLocationsStarted())

        axios
            .get('/api/locations')
            .then(res => {
                dispatch(getLocationsSuccess(res.data["_embedded"].locations))
            })
            .catch(err => {
                dispatch(getLocationsFailure(err.message))
            })
    }
}

export const getPersonageTypes = () => {
    return dispatch => {
        dispatch(getPersonageTypesStarted())
        axios.get('api/personageTypes')
            .then(res => dispatch(getPersonageTypesSuccess(res.data["_embedded"].personageTypes)))
            .catch(err => dispatch(getPersonageFailure(err)))
    }
}