import axios from "axios"
import {
    addBlockingSuccess,
    deleteBlockingSuccess,
    getBlockingFailure,
    getBlockingStarted,
    getBlockingSuccess,
} from "./actions"

export const getBlocking = () => {
    return dispatch => {
        dispatch(getBlockingStarted())

        const id = JSON.parse(localStorage.getItem("id"))
        axios
            .get(`api/blockList/search/findByIdBlockingId?blockingId=${id}`)
            .then(res => {
                dispatch(getBlockingSuccess(res.data["_embedded"].blockList))
            })
            .catch(err => {
                dispatch(getBlockingFailure(err.message))
            })
    }
}

export const deleteBlocking = (link) => {
    return dispatch => {
        dispatch(getBlockingStarted())
        axios.delete(link)
            .then(res => dispatch(deleteBlockingSuccess(link))
            )
            .catch(err => dispatch(getBlockingFailure(err)))
    }
}

export const addBlocking = (blockedId, type) => {
    return dispatch => {
        dispatch(getBlockingStarted())
        axios.post("/api/blockList", {
            id: {"blockingId": JSON.parse(localStorage.getItem("id")), "blockedId": blockedId}, type: type
        })
            .then(res => dispatch(addBlockingSuccess(res.data)))
            .catch(err => dispatch(getBlockingFailure(err.message)))
    }
}

export const changeBlocking = (link) => {
    return dispatch => {
        dispatch(getBlockingStarted())

    }
}