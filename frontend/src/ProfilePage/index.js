import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {personageModel} from "@entities/profile"
import {blockModel} from "@entities/block"
import {awardModel} from "@entities/award"
import {Navbar} from "@components/Navbar"
import {AboutInfo} from "./components/AboutInfo"
import {WeaponCollection} from "./components/weapon/WeaponCollection"
import {ClothingCollection} from "./components/clothing/ClothingCollection"
import {BlackList} from "./components/BlackList"
import {AwardCollection} from "./components/AwardCollection"
import {Preloader} from "@components/Preloader"
import {Statistics} from "./components/Statistics"

export const ProfilePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
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
            <Statistics/>
            <WeaponCollection/>
            <ClothingCollection/>
            <AwardCollection/>
            <BlackList/>
        </div>
    </>
}