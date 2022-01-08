import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {eventModel} from "@entities/event"
import {EventItem} from "./EventItem"
import {Preloader} from "@components/Preloader";

export const EventCollection = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(eventModel.thunks.getEvents())
    }, [])

    const events = useSelector(eventModel.selectors.events)

    useEffect(() => {
        if (events.length !== 0) {
            M.Collapsible.init(document.querySelectorAll('.collapsible'));
        }
    }, [events]);

    if (events.length === 0) {
        return <div className="center">
            <Preloader/>
        </div>
    }

    return <ul className="collapsible">
        {
            events.map((event, index) =>
                <li key={index}>
                    <EventItem props={event}/>
                </li>)
        }
    </ul>
}