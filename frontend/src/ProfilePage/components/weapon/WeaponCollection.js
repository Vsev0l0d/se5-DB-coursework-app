import React from "react"
import {useSelector} from "react-redux"
import {personageModel} from "@entities/profile"
import {AddWeapon} from "./AddWeapon"
import {ExchangeWeapon} from "./ExchangeWeapon"
import {DeleteWeapon} from "./DeleteWeapon"

export const WeaponCollection = () => {
    const weapons = useSelector(personageModel.selectors.weapons)

    if (weapons.length === 0) {
        return <>
            <div>Оружие</div>
            <div>
                <ul className="collection">
                    <li key={0}>
                        <AddWeapon/>
                    </li>
                </ul>
            </div>
        </>
    }

    return (<>
        <div>Оружие</div>
        <div>
            <ul className="collection">
                {weapons.map((weapon, index) =>
                    <li key={index} className="collection-item">
                        <div className="row" style={{"marginBottom": "0px"}}>
                            <p className="col s4 black-text">{weapon.name}</p>
                            <p className="col s4 center-align helper-text grey-text">{weapon.type}</p>
                            <p className="col s3 center-align helper-text grey-text">{weapon.damage}</p>
                            <div className="col s1 helper-text container">
                                <ExchangeWeapon weaponLink={weapon["_links"].weapon.href} id={index}/>
                                <DeleteWeapon weaponLink={weapon["_links"].weapon.href} id={index}/>
                            </div>
                        </div>
                    </li>)}
                <li key={weapons.length + 1} className="collection-item">
                    <AddWeapon/>
                </li>
            </ul>
        </div>
    </>)
}