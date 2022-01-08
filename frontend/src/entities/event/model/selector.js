export const all = state => state.events

export const loading = state => all(state).loading
export const error = state => all(state).error
export const events = state => all(state).events