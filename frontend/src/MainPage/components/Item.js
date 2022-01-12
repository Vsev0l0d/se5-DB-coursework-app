import React from "react"
import dateFormat from "dateformat"
import axios from "axios"

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
            {renderChangingConfirmationCommand(props)}
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
            {thingControls.map((thing, index) => <p className="col offset-s1 s11" key={index}>{thing.id.type}</p>)}

            {personageTypes.map((type, index) => <p className="col offset-s1 s11" key={index}>{type.id.type}</p>)}
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

const handleConfirmClick = (event) => {
    event.preventDefault()
    // const dispatch = useDispatch()
    const link = this.props["_links"].invitation.href
    console.log(JSON.stringify(`{"confirmation": ${!this.props.confirmation}}`))
    axios.patch(link, JSON.stringify(`"confirmation": ${status}`))
        .then(r => {
            console.log(r, "success")
            // dispatch(invitationModel.thunks.getInvitations())
        })
        .catch(e => console.log(e, "fail"))
}

const renderChangingConfirmationCommand = (props) => {
    if (props.confirmation === true) {
        return <a className="col offset-s3 s3 waves-effect waves-teal btn-flat right-align"
                  onClick={handleConfirmClick}>
            <span className="red-text center">
            Отказаться
            </span>
        </a>
    }

    if (props.confirmation === false) {
        return <a className="col offset-s3 s3 waves-effect waves-teal btn-flat right-align"
                  onClick={handleConfirmClick}>
            <span className="green-text">
            Согласиться
            </span>
        </a>
    }

    if (props.confirmation === null) {
        return (<>
            <a className="col offset-s3 s3 waves-effect waves-teal btn-flat right-align"
               onClick={handleConfirmClick}>
            <span className="green-text">
            Согласиться
            </span>
            </a>
            <a className="col offset-s3 s3 waves-effect waves-teal btn-flat right-align"
               onClick={handleConfirmClick}>
            <span className="red-text center">
            Отказаться
            </span>
            </a>
        </>)
    }

    return <></>
}