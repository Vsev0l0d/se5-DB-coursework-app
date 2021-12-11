import {
    GET_INVITATIONS_FAILURE,
    GET_INVITATIONS_STARTED,
    GET_INVITATIONS_SUCCESS
} from "@entities/invitation/model/actionTypes"


export const getInvitationsSuccess = (invitations) => {
    return {
        type: GET_INVITATIONS_SUCCESS,
        payload: {
            invitations
        }
    }
}

export const getInvitationsStarted = () => {
    return {
        type: GET_INVITATIONS_STARTED
    }
}

export const getInvitationsFailure = error => {
    return {
        type: GET_INVITATIONS_FAILURE,
        payload: {
            error
        }
    }
}