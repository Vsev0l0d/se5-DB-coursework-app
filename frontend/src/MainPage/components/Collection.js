import React, {useEffect} from "react"
import {useSelector} from "react-redux"
import {invitationModel} from "@entities/invitation"
import {blockModel} from "@entities/block"
import {Item} from "./Item"

export const Collection = () => {
    const invitations = useSelector(invitationModel.selectors.invitations)
    const blocked = useSelector(blockModel.selectors.blocking)
    const spam = useSelector(invitationModel.selectors.getSpam(blocked))
    const clearInvitations = useSelector(invitationModel.selectors.getInvitations(blocked))

    useEffect(() => {
        M.Tabs.init(document.querySelectorAll('.tabs'))
        if (invitations.length !== 0) {
            M.Collapsible.init(document.querySelectorAll('.collapsible'))
        }
    }, [invitations])

    return (<div className="row">
        <div className="col s12">
            <ul className="tabs">
                <li className="tab col s4"><a href="#future">Будущие</a></li>
                <li className="tab col s4"><a className="active" href="#new">Неотвеченные</a></li>
                <li className="tab col s4"><a href="#spam" style={{color: "grey"}}>Спам</a></li>
            </ul>
        </div>
        <div id="future" className="col s12">
            <ul className="collapsible">
                {clearInvitations.length ? clearInvitations.filter(invitation => invitation.confirmation !== null).map((invitation, index) =>
                    <li key={index}>
                        <Item props={invitation}/>
                    </li>) : <></>}
            </ul>
        </div>
        <div id="new" className="col s12">
            <ul className="collapsible">
                {clearInvitations.length ? clearInvitations.filter(invitation => invitation.confirmation === null).map((invitation, index) =>
                    <li key={index}>
                        <Item props={invitation}/>
                    </li>) : <></>}
            </ul>
        </div>

        <div id="spam" className="col s12">
            <ul className="collapsible">
                {spam.length ? spam.map((invitation, index) =>
                    <li key={index}>
                        <Item props={invitation}/>
                    </li>) : <></>}
            </ul>
        </div>
    </div>)
}