import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {personageModel} from "@entities/profile"
import {Collection} from "./components/Collection"
import {Navbar} from "@components/Navbar"
import {Preloader} from "@components/Preloader";

export const MainPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(personageModel.thunks.getPersonage())
    }, [])

    const loading = useSelector(personageModel.selectors.loading)
    if (loading) {
        return <>
            <Navbar/>
            <div className="center">
                <Preloader/>
            </div>
        </>
    }

    return (<>
            <Navbar/>
            <Collection/>
        </>
    )
}