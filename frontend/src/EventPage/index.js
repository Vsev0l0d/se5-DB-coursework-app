import React from "react"
import {Navbar} from "@components/Navbar"
import {Collection} from "./components/Collection"
import {FloatingButton} from "./components/FloatingButton"

export const EventPage = () => {
    return <>
        <Navbar/>
        <Collection/>
        <FloatingButton/>
    </>
}