import React, {useEffect} from "react"
import {useDispatch} from "react-redux"
import {eventModel} from "@entities/event"
import {optionalModel} from "@entities/optional"
import {Navbar} from "@components/Navbar"
import {Collection} from "./components/Collection"
import {FloatingButton} from "./components/FloatingButton"

export const EventPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(eventModel.thunks.getEvents())
        dispatch(optionalModel.thunks.getLocations())
        dispatch(optionalModel.thunks.getPersonageTypes())

        M.Collapsible.init(document.querySelectorAll('.collapsible'))
    }, [])

    return <>
        <Navbar/>
        <Collection/>
        <FloatingButton/>
    </>
}