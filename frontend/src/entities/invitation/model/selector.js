export const all = state => state.invitations

export const loading = state => all(state).loading
export const error = state => all(state).error
export const invitations = state => all(state).invitations