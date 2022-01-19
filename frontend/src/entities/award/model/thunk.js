import axios from "axios"
import {
    addAwardsSuccess,
    deleteAwardSuccess,
    getAwardsFailure,
    getAwardsStarted,
    getAwardsSuccess
} from "@entities/award/model/actions"

export const getAwards = () => {
    return dispatch => {
        dispatch(getAwardsStarted())

        const id = JSON.parse(localStorage.getItem("id"))
        axios
            .get(`api/prizes/search/findByOwnerId?ownerId=${id}`)
            .then(res => {
                dispatch(getAwardsSuccess(res.data["_embedded"].prizes))
            })
            .catch(err => {
                dispatch(getAwardsFailure(err.message))
            })
    }
}

export const addAward = (data) => {
    // example
    // data = {
    //     "type": "кубок",
    //     "ownerId": 2,
    //     "eventId": 2
    // }

    return dispatch => {
        dispatch(getAwardsStarted())

        axios
            .post(`api/prizes`, data)
            .then(res => {
                dispatch(addAwardsSuccess(res.data))
            })
            .catch(err => {
                dispatch(getAwardsFailure(err.message))
            })
    }
}

export const deleteAward = (link) => {
    return dispatch => {
        dispatch(getAwardsStarted())
        axios.delete(link)
            .then(res => dispatch(deleteAwardSuccess(link))
            )
            .catch(err => dispatch(getAwardsFailure(err)))
    }
}