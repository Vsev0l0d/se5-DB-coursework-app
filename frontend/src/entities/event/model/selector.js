export const all = state => state.events

export const loading = state => all(state).loading
export const error = state => all(state).error
export const events = state => all(state).events.sort((entry1, entry2) => {
        return new Date(entry1.dateStart) - new Date(entry2.dateStart)
    })