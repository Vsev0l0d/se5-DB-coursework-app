import axios from "axios"
import {getEventsFailure, getEventsStarted, getEventsSuccess} from "@entities/event/model/actions"

export const getEvents = () => {
    return dispatch => {
        dispatch(getEventsStarted())

        const id = JSON.parse(localStorage.getItem("id"))
        axios
            .get(`/api/events/search/findByOwnerId?ownerId=${id}`)
            .then(res => {
                dispatch(getEventsSuccess(res.data["_embedded"].events))
            })
            .catch(err => {
                dispatch(getEventsFailure(err.message))
            })
    }
}