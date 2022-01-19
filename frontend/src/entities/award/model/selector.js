export const all = state => state.awards

export const loading = state => all(state).loading
export const error = state => all(state).error
export const awards = state => all(state).awards