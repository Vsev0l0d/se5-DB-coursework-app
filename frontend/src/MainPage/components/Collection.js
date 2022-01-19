import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {invitationModel} from "@entities/invitation"
import {Item} from "./Item"

//ToDo: Сортировка
export const Collection = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(invitationModel.thunks.getInvitations())
    }, [])

    const invitations = useSelector(invitationModel.selectors.invitations)

    useEffect(() => {
        M.Tabs.init(document.querySelectorAll('.tabs'))
        if (invitations.length !== 0) {
            M.Collapsible.init(document.querySelectorAll('.collapsible'))
        }
    }, [invitations])

    // if (invitations.length === 0) {
    //     return <div className="center">
    //         <Preloader/>
    //     </div>
    // }

    //ToDo: как отнести приглашения в спам, если нет никаких способов сравнения, в черном списке есть только id, а в приглашении только ссылка на владельца не совпадающая с той
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
                    {invitations.length ? invitations.filter(invitation => invitation.confirmation !== null && invitation["_embedded"].event.dateStart >= Date.now()).map((invitation, index) =>
                        <li key={index}>
                            <Item props={invitation}/>
                        </li>) : <></>}
                </ul>
            </div>
            <div id="new" className="col s12">
                <ul className="collapsible">
                    {invitations.length ? invitations.filter(invitation => invitation.confirmation === null && invitation["_embedded"].event.dateStart >= Date.now()).map((invitation, index) =>
                        <li key={index}>
                            <Item props={invitation}/>
                        </li>) : <></>}
                </ul>
            </div>

            <div id="spam" className="col s12">
                <ul className="collapsible">
                    {invitations.length ? invitations.filter(invitation => invitation.confirmation === null).map((invitation, index) =>
                        <li key={index}>
                            <Item props={invitation}/>
                        </li>) : <></>}
                </ul>
            </div>
        </div>)
}