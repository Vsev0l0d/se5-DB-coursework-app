import React, {useEffect} from "react"
import {useDispatch} from "react-redux"
import {AboutInfo} from "./components/AboutInfo"
import {invitationModel} from "@entities/invitation"
import {personageModel} from "@entities/profile"
import {WeaponCollection} from "./components/WeaponCollection"
import {ClothingCollection} from "./components/ClothingCollection"
import {Navbar} from "@components/Navbar"

export const ProfilePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(invitationModel.thunks.getInvitations())
        dispatch(personageModel.thunks.getPersonage())
    }, [])


    return <>
        <Navbar/>
        <div className="container">
            <AboutInfo/>
            <WeaponCollection/>
            <ClothingCollection/>
        </div>
    </>
}