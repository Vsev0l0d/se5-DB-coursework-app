import React, {useEffect} from "react"
import {useDispatch} from "react-redux"
import {invitationModel} from "@entities/invitation"
import {personageModel} from "@entities/profile"
import {blockModel} from "@entities/block"
import {awardModel} from "@entities/award"
import {Navbar} from "@components/Navbar"
import {AboutInfo} from "./components/AboutInfo"
import {WeaponCollection} from "./components/weapon/WeaponCollection"
import {ClothingCollection} from "./components/clothing/ClothingCollection"
import {BlackList} from "./components/BlackList"
import {AwardCollection} from "./components/AwardCollection";

export const ProfilePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(invitationModel.thunks.getInvitations())
        dispatch(personageModel.thunks.getPersonage())
        dispatch(blockModel.thunks.getBlocking())
        dispatch(awardModel.thunks.getAwards())
    }, [])


    return <>
        <Navbar/>
        <div className="container">
            <AboutInfo/>
            <WeaponCollection/>
            <ClothingCollection/>
            <AwardCollection/>
            <BlackList/>
        </div>
    </>
}