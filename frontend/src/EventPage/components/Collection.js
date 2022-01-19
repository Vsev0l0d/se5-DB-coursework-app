import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {Preloader} from "@components/Preloader"
import {eventModel} from "@entities/event"
import {locationModel} from "@entities/location"
import {Item} from "./Item"

export const Collection = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(eventModel.thunks.getEvents())
        dispatch(locationModel.thunks.getLocations())
    }, [])

    const events = useSelector(eventModel.selectors.events)

    useEffect(() => {
        if (events.length !== 0) {
            M.AutoInit()
        }
    }, [events])

    if (events.length === 0) {
        return <div className="center">
            <Preloader/>
        </div>
    }

    return <ul className="collapsible">
        {
            events.map((event, index) =>
                <li key={index}>
                    <Item props={event}/>
                </li>)
        }
    </ul>
}