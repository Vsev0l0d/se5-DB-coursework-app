import axios from "axios"
import {
    addClothingSuccess,
    addWeaponSuccess,
    changeClothingSuccess,
    changeWeaponSuccess,
    getClothingFailure,
    getClothingStarted,
    getClothingSuccess,
    getProfileFailure,
    getProfileStarted,
    getProfileSuccess,
    getWeaponsFailure,
    getWeaponsStarted,
    getWeaponsSuccess
} from "@entities/profile/model/actions"

export const getPersonage = () => {
    return dispatch => {
        const id = JSON.parse(localStorage.getItem("id"))

        dispatch(getProfileStarted())
        axios
            .get(`api/personages/${id}?projection=personageProjection`)
            .then(res => {
                dispatch(getProfileSuccess(res.data))
            })
            .catch(err => {
                dispatch(getProfileFailure(err.message))
            })
        dispatch(getWeaponsStarted())
        axios
            .get(`api/weapons/search/findByOwnerId?ownerId=${id}`)
            .then(res => {
                dispatch(getWeaponsSuccess(res.data["_embedded"].weapons))
            })
            .catch(err => {
                dispatch(getWeaponsFailure(err.message))
            })
        dispatch(getClothingStarted())
        axios
            .get(`api/clothing/search/findByOwnerId?ownerId=${id}`)
            .then(res => {
                dispatch(getClothingSuccess(res.data["_embedded"].clothing))
            })
            .catch(err => {
                dispatch(getClothingFailure(err.message))
            })
    }
}

export const addWeapon = (name, damage, type) => {
    return dispatch => {
        dispatch(getWeaponsStarted())
        axios.post('/api/weapons', {
            "name": name, "damage": damage, "type": type, "ownerId": JSON.parse(localStorage.getItem("id"))
        })
            .then(res => dispatch(addWeaponSuccess(res.data))
            )
            .catch(err => dispatch(getWeaponsFailure(err.message)))
    }
}

export const addClothing = (name, type) => {
    return dispatch => {
        dispatch(getClothingStarted())
        axios.post('/api/clothing', {
            "name": name, "type": type, "ownerId": JSON.parse(localStorage.getItem("id"))
        })
            .then(res => dispatch(addClothingSuccess(res.data)))
            .catch(err => dispatch(getClothingFailure(err.message)))
    }
}

export const exchangeWeapon = (link, id) => {
    return dispatch => {
        dispatch(getWeaponsStarted())
        axios.patch(link, {
            "ownerId": id
        })
            .then(dispatch(changeWeaponSuccess(link)))
            .catch(err => dispatch(getWeaponsFailure(err)))
    }
}

export const exchangeClothing = (link, id) => {
    return dispatch => {
        dispatch(getClothingStarted())
        axios.patch(link, {
            "ownerId": id
        })
            .then(dispatch(changeClothingSuccess(link)))
            .catch(err => dispatch(getClothingFailure(err)))
    }
}

export const deleteClothing = (link) => {
    return dispatch => {
        dispatch(getClothingStarted())
        axios.delete(link)
            .then(dispatch(changeClothingSuccess(link)))
            .catch(err => dispatch(getClothingFailure(err)))
    }
}

export const deleteWeapon = (link) => {
    return dispatch => {
        dispatch(getWeaponsStarted())

        axios.delete(link)
            .then(dispatch(changeWeaponSuccess(link))
            )
            .catch(err => dispatch(getWeaponsFailure(err)))
    }
}
