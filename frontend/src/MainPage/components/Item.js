import React, {useEffect} from "react"
import dateFormat from "dateformat"
import {useDispatch} from "react-redux"
import {invitationModel} from "@entities/invitation"
import {blockModel} from "@entities/block"

export const Item = ({props}) => {
    useEffect(() => {
        M.AutoInit()
    }, [])

    const dispatch = useDispatch()

    const types = ["отказ от рассылок", "отказ от всех приглашений"]

    const link = props["_links"].invitation.href

    const handleConfirmClick = (event) => {
        event.preventDefault()
        dispatch(invitationModel.thunks.changeInvitation(link, {"confirmation": !props.confirmation}))
    }

    const handleBlockingClick = (event) => {
        event.preventDefault()
        dispatch(blockModel.thunks.addBlocking(props["_embedded"].event.owner.id, props["_embedded"].event.visibility ? types[0] : types[1]))
    }

    const renderLocation = () => {
        const location = props["_embedded"].event.location

        if (location.description) {
            return <>
                <span className="col s12 text-accent-2">Место проведения</span>
                <p className="col offset-s1 s11">{location.name} ({location.x}; {location.y})</p>
                <p className="col offset-s1 s11 helper-text">{location.description}</p>
            </>
        }
        return <>
            <span className="col s12 text-accent-2">Место проведения</span>
            <p className="col offset-s1 s11">{location.name} ({location.x}; {location.y})</p>
        </>
    }

    const eventControl = () => {
        const thingControls = props["_embedded"].event.thingControls
        const personageTypes = props["_embedded"].event.personageTypes

        if (thingControls.length !== 0 || personageTypes.length !== 0) {
            return <>
                <span className="col s12 text-accent-1">Для посещения необходимо:</span>
                {thingControls.map((thing, index) => <p className="col offset-s1 s11" key={index}>{thing.id.type}</p>)}

                {personageTypes.map((type, index) => <p className="col offset-s1 s11" key={index}>{type.id.type}</p>)}
            </>
        }
    }

    const renderConfirmationColumn = () => {
        const value = props.confirmation
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

    const renderChangingConfirmationCommand = () => {
        if (props.confirmation === true) {
            return <a className="col offset-s3 s3 waves-effect waves-teal btn-flat right-align"
                      onClick={handleConfirmClick}>
                <span className="red-text center-align">Отказаться</span>
            </a>
        }

        if (props.confirmation === false) {
            return <a className="col offset-s3 s3 waves-effect waves-teal btn-flat right-align"
                      onClick={handleConfirmClick}>
                <span className="green-text center-align">Согласиться</span>
            </a>
        }

        if (props.confirmation === null) {
            return (<>
                <a className="col s3 waves-effect waves-teal btn-flat right-align"
                   onClick={handleConfirmClick}>
                    <span className="green-text center-align">Согласиться</span>
                </a>
                <a className="col s3 waves-effect waves-teal btn-flat right-align"
                   onClick={handleConfirmClick}>
                    <span className="red-text center-align">Отказаться</span>
                </a>
            </>)
        }

        return <></>
    }

    const renderSpamQuestion = () => {
        if (props["_embedded"].event.visibility) {
            return <span className="col s6 red-text" onClick={handleBlockingClick}>Не получать рассылок от этого пользователя</span>
        }
        return <span className="col s6 red-text" onClick={handleBlockingClick}>Не получать приглашений от этого пользователя</span>
    }

    return <>
        <div className="grey lighten-4 collapsible-header row" style={{marginBottom: "0"}}>
            <p className="col s3">{dateFormat(props["_embedded"].event["dateStart"], "dd.mm.yyyy HH:MM")}</p>
            <p className="col s5">{props["_embedded"].event.name}</p>
            <p className="col s3">{props["_embedded"].event.owner.name}</p>
            <p className="col s1">{renderConfirmationColumn()}</p>
        </div>

        <div className="collapsible-body row">
            {renderLocation()}
            {eventControl()}
            {renderSpamQuestion()}
            {renderChangingConfirmationCommand()}
        </div>
    </>
}