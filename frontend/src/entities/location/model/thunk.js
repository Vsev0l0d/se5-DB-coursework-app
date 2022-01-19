import axios from "axios"
import {getLocationsFailure, getLocationsStarted, getLocationsSuccess} from "@entities/location/model/actions"

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