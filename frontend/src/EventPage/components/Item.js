import React from "react"
import dateFormat from "dateformat"
import {useDispatch} from "react-redux"
import {eventModel} from "@entities/event"

export const Item = (props) => {
    if (!props.event) {
        return <></>
    }

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(eventModel.thunks.deleteEvent(props.event["_links"]))
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
            <span className="col s12 text-accent-2">Место проведения</span>
            <p className="col offset-s1 s11">{props.event.location.name} ({props.event.location.x};{props.event.location.y})</p>
            {eventControl(props.event)}
        </div>
    </>
}

const eventControl = (event) => {
    const thingControls = event.thingControls
    const personageTypes = event.personageTypes

    if (thingControls.length !== 0 || personageTypes.length !== 0) {
        return <>
            <span className="col s12 text-accent-1">Ограничения:</span>
            {thingControls.map((thing, index) =>
                <p className="col offset-s1 s11" key={index}>{thing.id.type}</p>
            )}

            {personageTypes.map((type, index) =>
                <p className="col offset-s1 s11" key={index}>{type.name}</p>
            )}
        </>
    }
}