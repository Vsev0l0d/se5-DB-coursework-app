import React from "react"
import {Navbar} from "@components/Navbar"
import {EventCollection} from "./components/EventCollection"

export const EventPage = () => {
    return <>
        <Navbar/>
        <EventCollection/>
    </>
}