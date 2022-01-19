export const all = state => state.locations

export const loading = state => all(state).loading
export const error = state => all(state).error
export const locations = state => all(state).locations