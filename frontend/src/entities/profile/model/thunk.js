import axios from "axios"
import {
    getClosingFailure,
    getClosingStarted,
    getClothingSuccess,
    getProfileFailure,
    getProfileStarted,
    getProfileSuccess,
    getWeaponsFailure,
    getWeaponsStarted,
    getWeaponsSuccess
} from "@entities/profile/model/actions"

export const getPersonage = () => {
    return dispatch => {
        const id = JSON.parse(localStorage.getItem("id"))

        dispatch(getProfileStarted())
        axios
            .get(`api/personages/${id}`)
            .then(res => {
                dispatch(getProfileSuccess(res.data))
            })
            .catch(err => {
                dispatch(getProfileFailure(err.message))
            })
        dispatch(getWeaponsStarted())
        axios
            .get(`api/weapons/search/findByOwnerId?ownerId=${id}`)
            .then(res => {
                dispatch(getWeaponsSuccess(res.data["_embedded"].weapons))
            })
            .catch(err => {
                dispatch(getWeaponsFailure(err.message))
            })
        dispatch(getClosingStarted())
        axios
            .get(`api/clothing/search/findByOwnerId?ownerId=${id}`)
            .then(res => {
                dispatch(getClothingSuccess(res.data["_embedded"].clothing))
            })
            .catch(err => {
                dispatch(getClosingFailure(err.message))
            })
    }
}