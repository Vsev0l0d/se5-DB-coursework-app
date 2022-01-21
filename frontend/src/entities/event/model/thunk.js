import axios from "axios"
import {
    addEventSuccess,
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
export const deleteEvent = (link, thingControls) => {
    return async dispatch => {
        dispatch(getEventsStarted())
        console.log(thingControls)
        await thingControls.map(thing => axios.delete(`api/thingControls/${thing.id.eventId}_${thing.id.type}`))

        axios.delete(link)
            .then(dispatch(deleteEventSuccess(link))
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

export const addEvent = (name, description, location, dateStart, dateEnd, thingControl, personageTypeId, visibility) => {
    const id = JSON.parse(localStorage.getItem("id"))
    return dispatch => {
        dispatch(getEventsStarted())
        axios.post('api/events', {
            name: name,
            description: description,
            location: location,
            dateStart: dateStart,
            dateEnd: dateEnd,
            owner: `/api/personages/${id}`,
            visibility: visibility
        })
            .then(async res => {
                const eventId = res.data.id
                await thingControl.map(thing => axios.post('/api/thingControls', {
                    id: {
                        "eventId": eventId,
                        "type": thing
                    }
                })
                    .catch(e => dispatch(getEventsFailure(e))))
                await personageTypeId.map(typeId => axios.post('/api/eventPersonageTypes', {
                    id: {
                        "eventId": eventId,
                        "personageTypeId": typeId
                    }
                }).catch(e => dispatch(getEventsFailure(e))))

                await axios.get(`/api/events/${eventId}?projection=eventProjection`)
                    .then(res => dispatch(addEventSuccess(res.data)))
                    .catch(err => dispatch(getEventsFailure(err)))

                if (visibility) {
                    createInvitations(eventId)
                }
            })
            .catch(err => dispatch(getEventsFailure(err)))
    }
}

export const createInvitations = async (eventId) => {
    const personages = []
    await axios.get('/api/personages')
        .then(res => personages.push(...res.data["_embedded"].personages))
    console.log(personages)
    personages.map(personage => axios.post('/api/invitations', {
        event: `/api/events/${eventId}`,
        personageId: personage.id
    }))

}
