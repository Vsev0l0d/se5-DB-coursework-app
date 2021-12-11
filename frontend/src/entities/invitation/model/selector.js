export const all = state => state.invitations

export const loading = state => all(state).loading
export const error = state => all(state).error
export const invitations = state => all(state).invitations
// export const acceptInvitations = state => all(state).invitations.filter(invitation => invitation.confirmation)
// export const rejectInvitations = state => all(state).invitations.filter(invitation => !(invitation.confirmation && invitation.confirmation !== null))
// export const unansweredInvitations = state => all(state).invitations.filter(invitation => invitation.confirmation === null)