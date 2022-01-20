import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
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
import {Preloader} from "@components/Preloader";

export const ProfilePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(invitationModel.thunks.getInvitations())
        dispatch(personageModel.thunks.getPersonage())
        dispatch(blockModel.thunks.getBlocking())
        dispatch(awardModel.thunks.getAwards())
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