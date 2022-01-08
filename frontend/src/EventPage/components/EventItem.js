import React from "react"
import dateFormat from "dateformat"

export const EventItem = ({props}) => {
    return <>
        <div className="grey lighten-4 collapsible-header row" style={{marginBottom: "0"}}>
            <p className="col offset-s1 s4">{dateFormat(props.dateStart, "dd.mm.yyyy HH:MM")}</p>
            <p className="col s7">{props.name}</p>
        </div>

        <div className="collapsible-body row">
            <span className="col s12 text-accent-2">Место проведения</span>
            <p className="col offset-s1 s11">{props.location.name} ({props.location.x};{props.location.y})</p>

            {eventControl(props)}
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
                <p className="col offset-s1 s11" key={index}>{type.id.type}</p>
            )}
        </>
    }
}