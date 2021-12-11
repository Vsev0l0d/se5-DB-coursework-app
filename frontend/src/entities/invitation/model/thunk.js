import axios from "axios"
import {getInvitationsFailure, getInvitationsStarted, getInvitationsSuccess} from "./actions"

export const getInvitations = () => {
    return dispatch => {
        dispatch(getInvitationsStarted())

        const id = JSON.parse(localStorage.getItem("id"))
        axios
            .get(`api/invitations/search/findByPersonageId?personageId=${id}`)
            .then(res => {
                dispatch(getInvitationsSuccess(res.data["_embedded"].invitations))
            })
            .catch(err => {
                dispatch(getInvitationsFailure(err.message))
            })
    }
}