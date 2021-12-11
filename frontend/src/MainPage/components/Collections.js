import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {invitationModel} from "@entities/invitation"
import {Preloader} from "@components/Preloader"
import dateFormat from "dateformat";

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

const eventControl = (event) => {
    const thingControls = event.thingControls
    const personageTypes = event.personageTypes

    if (thingControls.length !== 0 || personageTypes.length !== 0) {
        return <div className="row" style={{marginBottom: "0"}}>
            <span className="text-accent-1">Для посещения необходимо:</span>
            <ul className="collection"></ul>
            {thingControls.map((thing, index) =>
                <li key={index}>
                    <p>{thing.type}</p>
                </li>
            )}

            {personageTypes.map((type, index) =>
                <li key={index}>
                    <p>{type.type}</p>
                </li>
            )}
        </div>
    }

    return <></>
}
//ToDo: Сортировка
export const Collections = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(invitationModel.thunks.getInvitations())
    }, [])

    const invitations = useSelector(invitationModel.selectors.invitations)

    useEffect(() => {
        if (invitations.length !== 0) {
            M.Collapsible.init(document.querySelectorAll('.collapsible'));
        }
    }, [invitations]);

    if (invitations.length === 0) {
        return <Preloader/>
    }

    return (<ul className="collapsible">
        <li key={0}>
            <div className="grey lighten-3 disabled row" style={{marginBottom: "0"}}>
                <p className="col s3 center-align">Дата и время</p>
                <p className="col s3 center-align">Название</p>
                <p className="col s3 center-align">От кого</p>
                <p className="col s3 center-align">Статус</p>
            </div>
        </li>

        {invitations.map((invitation, index) =>
            <li key={index + 1}>
                <div className="grey lighten-4 collapsible-header row" style={{marginBottom: "0"}}>
                    <p className="col s3 center-align">{dateFormat(invitation["_embedded"].event.dateStart, "dd.mm.yyyy HH:MM")}</p>
                    <p className="col s3 center-align">{invitation["_embedded"].event.name}</p>
                    <p className="col s3 center-align">{invitation["_embedded"].event.owner.name}</p>
                    <p className="col s3 center-align">{renderConfirmationColumn(invitation.confirmation)}</p>
                </div>

                <div className="collapsible-body">
                    <div>
                        <span className="card-title small">Место проведения</span>
                        <p className="col s12">{invitation["_embedded"].event.location.name} ({invitation["_embedded"].event.location.x};{invitation["_embedded"].event.location.y})</p>
                        <p className="col s12 helper-text">{invitation["_embedded"].event.location.description}</p>
                    </div>

                    <div className="row" style={{marginBottom: "0"}}>
                        {eventControl(invitation["_embedded"].event)}
                    </div>

                    <div className="row" style={{marginBottom: "0"}}>
                        <span className="col s6 red-text" style={{padding: "0"}}>Не получать приглашений от этого пользователя</span>
                        {renderChangingConfirmationCommand(invitation.confirmation)}
                    </div>
                </div>
            </li>)}
    </ul>)
}