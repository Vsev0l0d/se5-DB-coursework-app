import React, {useEffect} from "react"
import {useDispatch} from "react-redux"
import {personageModel} from "@entities/profile"
import {Collection} from "./components/Collection"
import {Navbar} from "@components/Navbar"

export const MainPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(personageModel.thunks.getPersonage())
    }, [])

    return (<>
        <Navbar/>
        <Collection/>
    </>)
}