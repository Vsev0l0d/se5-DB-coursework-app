export const all = state => state.profile

export const loading = state => all(state).loading
export const error = state => all(state).error
export const profile = state => all(state).profile
export const weapons = state => all(state).weapons
export const clothing = state => all(state).clothing