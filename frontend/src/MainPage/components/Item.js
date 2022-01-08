import React from "react"
import dateFormat from "dateformat"

//ToDo: добавить действия кнопок соглашения, блока
export const Item = ({props}) => {
    return <>
        <div className="grey lighten-4 collapsible-header row" style={{marginBottom: "0"}}>
            <p className="col s3">{dateFormat(props["_embedded"].event["dateStart"], "dd.mm.yyyy HH:MM")}</p>
            <p className="col s5">{props["_embedded"].event.name}</p>
            <p className="col s3">{props["_embedded"].event.owner.name}</p>
            <p className="col s1">{renderConfirmationColumn(props.confirmation)}</p>
        </div>

        <div className="collapsible-body row">
            <span className="col s12 text-accent-2">Место проведения</span>
            <p className="col offset-s1 s11">{props["_embedded"].event.location.name} ({props["_embedded"].event.location.x};{props["_embedded"].event.location.y})</p>
            {renderLocationDescription(props["_embedded"].event.location.description)}

            {eventControl(props["_embedded"].event)}

            <span className="col s6 red-text">Не получать приглашений от этого пользователя</span>
            {renderChangingConfirmationCommand(props.confirmation)}
        </div>
    </>
}

const renderLocationDescription = (description) => {
    if (description) {
        return <p className="col offset-s1 s11 helper-text">{description}</p>
    }
}

const eventControl = (event) => {
    const thingControls = event.thingControls
    const personageTypes = event.personageTypes

    if (thingControls.length !== 0 || personageTypes.length !== 0) {
        return <>
            <span className="col s12 text-accent-1">Для посещения необходимо:</span>
            {thingControls.map((thing, index) =>
                <p className="col offset-s1 s11" key={index}>{thing.id.type}</p>
            )}

            {personageTypes.map((type, index) =>
                <p className="col offset-s1 s11" key={index}>{type.id.type}</p>
            )}
        </>
    }
}

const renderConfirmationColumn = (value) => {
    if (value === true) {
        return <i className="material-icons green-text">done</i>
    }

    if (value === false) {
        return <i className="material-icons red-text">close</i>
    }

    if (value === null) {
        return <i className="material-icons">help_outline</i>
    }

    return <></>
}

const renderChangingConfirmationCommand = (value) => {
    if (value === true) {
        return <span className="col offset-s3 s3 red-text right-align">Отказаться</span>
    }

    if (value === false) {
        return <span className="col offset-s3 s3 green-text right-align">Согласиться</span>
    }

    if (value === null) {
        return (<>
                <span className="col s3 green-text right-align">Согласиться</span>
                <span className="col s3 red-text right-align">Отказаться</span>
            </>
        )
    }

    return <></>
}