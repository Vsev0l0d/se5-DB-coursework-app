import React, {useEffect, useState} from "react"
import dateFormat from "dateformat"
import {useDispatch} from "react-redux"
import {eventModel} from "@entities/event"
import axios from "axios"

export const Item = (props) => {
    if (!props.event) {
        return <></>
    }

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(eventModel.thunks.deleteEvent(props.event["_links"].self.href, props.event.thingControls))
    }

    return <>
        <div className="grey lighten-4 collapsible-header row" style={{marginBottom: "0"}}>
            <p className="col offset-s1 s4">{dateFormat(props.event.dateStart, "dd.mm.yyyy HH:MM")}</p>
            <p className="col s7">{props.event.name}</p>
            <div className="col s1 left-align helper-text container">
                <a href={`#deleteEvent${props.index}`} className="btn-small modal-trigger white"><i
                    className="material-icons black-text">delete</i></a>

                <div id={`deleteEvent${props.index}`} className="modal">
                    <div className="modal-content">
                        <div className="row">
                            <span className="col s12">Удалить?</span>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a href="" className="modal-close waves-effect waves-green btn-flat"
                           onClick={handleSubmit}>Да</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="collapsible-body row">
            <p className="col s6">Дата окончания</p>
            <p className="col s6">{dateFormat(props.event.dateEnd, "dd.mm.yyyy HH:MM")}</p>
            <span className="col s12 text-accent-2">Место проведения</span>
            <p className="col offset-s1 s11">{props.event.location.name} ({props.event.location.x};{props.event.location.y})</p>
            {eventControl(props.event)}
            {
                ((new Date(props.event.dateEnd)).getTime() < (new Date()).getTime()) ? <AddPrizes event={props.event}/>
                    : (props.event.visibility ? <p className="col">Для всех</p> : <InvitePeople event={props.event}/>)
            }
        </div>
    </>
}

const AddPrizes = ({event}) => {
    const [allPeople, setAllPeople] = useState([])
    const [invitedTypePeople, setInvitedTypePeople] = useState([])
    const [typed, setTyped] = useState(false)
    const [eventId, setEventId] = useState(0)

    const prizes = ['сертификат I степени', 'сертификат II степени',
        'сертификат III степени', 'сертификат участника', 'кубок', 'медаль']

    useEffect(async () => {
        await axios.get(event["_links"].self.href).then(res => setEventId(res.data.id))

        if (event.personageTypes.length) {
            setTyped(true)
            event.personageTypes.map(async type => await axios.get(`/api/personages/search/findByPersonageType?personageType=/api/personageType/${type.id}`)
                .then(res => setInvitedTypePeople(res.data["_embedded"].personages)))
        } else await axios.get('/api/personages').then(res => setAllPeople(res.data["_embedded"].personages))

        M.AutoInit()
    }, [])

    const handleCreate = (type, id) => async (eventDura) => {
        eventDura.preventDefault()
        await axios.post('/api/prizes', {
            "type": type,
            "ownerId": id,
            "eventId": eventId
        })
    }

    return <div className="col s12">
        <p>Назначение призов</p>
        <ul className="collection">
            {typed ?
                invitedTypePeople.map((people, index) => {
                    return <>
                        <li key={index} className="collection-item">
                            <div className="row" style={{"marginBottom": "0px"}}>
                                <p className="col s8 black-text">{people.name}</p>
                                <div className="col offset-s3 s1 helper-text container">
                                    <a href={`#addPrize${eventId}_${people.id}`}
                                       className="btn-small white modal-trigger">
                                        <i className="material-icons black-text">add</i>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <div id={`addPrize${eventId}_${people.id}`} className="modal">
                            <div className="modal-content">
                                <div className="row">
                                    <ul className="collection">
                                        {prizes.map((prize, index) =>
                                            <li className="collection-item" key={index}>
                                                <div className="row">
                                                    <p className="col s11">{prize}</p>
                                                    <button onClick={handleCreate(prize, people.id)}
                                                            className="btn-small white">
                                                        <i className="material-icons black-text"
                                                        >add</i>
                                                    </button>
                                                </div>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                }) :
                allPeople.map((people, index) => {
                    return <>
                        <li key={index} className="collection-item">
                            <div className="row" style={{"marginBottom": "0px"}}>
                                <p className="col s8 black-text">{people.name}</p>
                                <div className="col offset-s3 s1 helper-text container">
                                    <a href={`#addPrize${eventId}_${people.id}`}
                                       className="btn-small white modal-trigger">
                                        <i className="material-icons black-text">add</i>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <div id={`addPrize${eventId}_${people.id}`} className="modal">
                            <div className="modal-content">
                                <div className="row">
                                    <ul className="collection">
                                        {prizes.map((prize, index) =>
                                            <li className="collection-item" key={index}>
                                                <div className="row">
                                                    <p className="col s11">{prize}</p>
                                                    <button onClick={handleCreate(prize, people.id)}
                                                            className="btn-small white">
                                                        <i className="material-icons black-text"
                                                        >add</i>
                                                    </button>
                                                </div>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                })}
        </ul>
    </div>
}

const InvitePeople = ({event}) => {
    const [allPeople, setAllPeople] = useState([])
    const [invitedTypePeople, setInvitedTypePeople] = useState([])
    const [typed, setTyped] = useState(false)

    useEffect(async () => {
        if (event.personageTypes.length) {
            setTyped(true)
            event.personageTypes.map(async type => await axios.get(`/api/personages/search/findByPersonageType?personageType=/api/personageType/${type.id}`)
                .then(res => setInvitedTypePeople(res.data["_embedded"].personages)))
        } else await axios.get('/api/personages').then(res => setAllPeople(res.data["_embedded"].personages))
    }, [])

    const handleInvite = (id) => async (eventDura) => {
        eventDura.preventDefault()
        await axios.post('/api/invitations', {
            event: event["_links"].self.href,
            personageId: id
        })
    }

    return <div className="col s12">
        <p>Приглашение на мероприятие</p>
        <ul className="collection">
            {typed ?
                invitedTypePeople.map((people, index) => {
                    return <li key={index} className="collection-item">
                        <div className="row" style={{"marginBottom": "0px"}}>
                            <p className="col s4 black-text">{people.name}</p>
                            <div className="col offset-s3 s1 helper-text container">
                                <a href="" className="btn-small white" onClick={handleInvite(people.id)}><i
                                    className="material-icons black-text">add</i></a>
                            </div>
                        </div>
                    </li>
                }) :
                allPeople.map((people, index) => {
                    return <li key={index} className="collection-item">
                        <div className="row" style={{"marginBottom": "0px"}}>
                            <p className="col s8 black-text">{people.name}</p>
                            <div className="col offset-s3 s1 helper-text container">
                                <a href="" className="btn-small white" onClick={handleInvite(people.id)}><i
                                    className="material-icons black-text">add</i></a>
                            </div>
                        </div>
                    </li>
                })}
        </ul>
    </div>
}

const eventControl = (event) => {
    const thingControls = event.thingControls
    const personageTypes = event.personageTypes

    if (thingControls.length !== 0 || personageTypes.length !== 0) {
        return <>
            <span className="col s12 text-accent-1">Ограничения:</span>
            {thingControls.map((thing, index) => <p className="col offset-s1 s11" key={index}>{thing.id.type}</p>)}

            {personageTypes.map((type, index) => <p className="col offset-s1 s11" key={index}>{type.name}</p>)}
        </>
    }
}