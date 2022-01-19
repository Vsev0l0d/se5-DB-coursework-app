import axios from "axios"
import {
    changeEventSuccess,
    deleteEventSuccess,
    getEventsFailure,
    getEventsStarted,
    getEventsSuccess
} from "@entities/event/model/actions"

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

//ToDo: удаление наград
export const deleteEvent = (link) => {
    return dispatch => {
        dispatch(getEventsStarted())
        axios.delete(link)
            .then(res => dispatch(deleteEventSuccess(link))
            )
            .catch(err => dispatch(getEventsFailure(err)))
    }
}

export const changeEvent = (link, data) => {
    return dispatch => {
        dispatch(getEventsStarted())
        axios.patch(link, data)
            .then(res => dispatch(changeEventSuccess(res.data, link)))
            .catch(err => dispatch(getEventsFailure(err)))
    }
}

export const addEvent = (name, description, location, dateStart, dateEnd, thingControl, personageType, visibility) => {
    const id = JSON.parse(localStorage.getItem("id"))
    return dispatch => {
        dispatch(getEventsStarted())
        axios.post('api/events', {
            name: name,
            description: description,
            location: location,
            dateStart: dateStart,
            dateEnd: dateEnd,
            thingControls: thingControl,
            personageTypes: personageType,
            owner: `/api/personages/${id}`,
            visibility: visibility
        })
            .then(res => dispatch(addEventSuccess(res.data)))
            .catch(err => dispatch(getEventsFailure(err)))
    }
}
