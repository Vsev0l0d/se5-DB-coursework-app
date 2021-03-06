import axios from "axios"
import {changeInvitationSuccess, getInvitationsFailure, getInvitationsStarted, getInvitationsSuccess} from "./actions"

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

export const changeInvitation = (link, data) => {
    return dispatch => {
        dispatch(getInvitationsStarted())
        axios.patch(link, data)
            .then(res => dispatch(changeInvitationSuccess(res.data, link)))
            .catch(err => dispatch(getInvitationsFailure(err)))
    }
}