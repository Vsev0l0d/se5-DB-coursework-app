import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {invitationModel} from "@entities/invitation"
import {Preloader} from "@components/Preloader"
import {Item} from "./Item"

//ToDo: Сортировка
export const Collection = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(invitationModel.thunks.getInvitations())
    }, [])

    const invitations = useSelector(invitationModel.selectors.invitations)

    useEffect(() => {
        M.Tabs.init(document.querySelectorAll('.tabs'));
        if (invitations.length !== 0) {
            M.Collapsible.init(document.querySelectorAll('.collapsible'));
        }
    }, [invitations]);

    if (invitations.length === 0) {
        return <div className="center">
            <Preloader/>
        </div>
    }

    return (
        <div className="row">
            <div className="col s12">
                <ul className="tabs">
                    <li className="tab col s4"><a href="#future">Будущие</a></li>
                    <li className="tab col s4"><a className="active" href="#new">Неотвеченные</a></li>
                    <li className="tab col s4"><a href="#spam" style={{color: "grey"}}>Спам</a></li>
                </ul>
            </div>
            <div id="future" className="col s12">
                <ul className="collapsible">
                    {
                        invitations.filter(invitation => invitation.confirmation === true).map((invitation, index) =>
                            <li key={index}>
                                <Item props={invitation}/>
                            </li>)
                    }
                </ul>
            </div>
            <div id="new" className="col s12">
                <ul className="collapsible">
                    {
                        invitations.filter(invitation => invitation.confirmation === false).map((invitation, index) =>
                            <li key={index}>
                                <Item props={invitation}/>
                            </li>)
                    }
                </ul>
            </div>
            <div id="spam" className="col s12">
                <ul className="collapsible">
                    {
                        invitations.filter(invitation => invitation.confirmation === null).map((invitation, index) =>
                            <li key={index}>
                                <Item props={invitation}/>
                            </li>)
                    }
                </ul>
            </div>
        </div>
    )
}