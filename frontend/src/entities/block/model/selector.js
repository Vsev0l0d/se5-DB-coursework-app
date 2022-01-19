export const all = state => state.blocking

export const loading = state => all(state).loading
export const error = state => all(state).error
export const blocking = state => all(state).blocking