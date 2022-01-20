export const all = state => state.invitations

export const loading = state => all(state).loading
export const error = state => all(state).error
export const invitations = state => all(state).invitations

export const getSpam = blocked => state => {
    const allInvitations = invitations(state)

    const hardSpamPersons = []
    const softSpamPersons = []
    blocked.forEach(entry => {
        if (entry.type === 'отказ от всех приглашений') {
            hardSpamPersons.push(entry.id.blockedId)
        } else {
            softSpamPersons.push(entry.id.blockedId)
        }
    })

    const spam = allInvitations.filter(entry =>
        (hardSpamPersons.includes(entry["_embedded"].event.owner.id) ||
            (softSpamPersons.includes(entry["_embedded"].event.owner.id) && entry["_embedded"].event.visibility)) &&
        entry["_embedded"].event.dateStart >= Date.now())

    spam.sort((entry1, entry2) => {
        return new Date(entry1["_embedded"].event.dateStart) - new Date(entry2["_embedded"].event.dateStart)
    })

    return spam
}

export const getInvitations = blocked => state => {
    const allInvitations = invitations(state)

    const hardSpamPersons = []
    const softSpamPersons = []
    blocked.forEach(entry => {
        if (entry.type === 'отказ от всех приглашений') {
            hardSpamPersons.push(entry.id.blockedId)
        } else {
            softSpamPersons.push(entry.id.blockedId)
        }
    })

    const clearInvitations = allInvitations.filter(entry =>
        (!hardSpamPersons.includes(entry["_embedded"].event.owner.id) ||
            !(softSpamPersons.includes(entry["_embedded"].event.owner.id) && entry["_embedded"].event.visibility)) &&
        entry["_embedded"].event.dateStart >= Date.now())

    clearInvitations.sort((entry1, entry2) => {
        return new Date(entry1["_embedded"].event.dateStart) - new Date(entry2["_embedded"].event.dateStart)
    })

    return clearInvitations
}