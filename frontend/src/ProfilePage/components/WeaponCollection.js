import React from "react"
import {useSelector} from "react-redux"
import {personageModel} from "@entities/profile"
import {AddItem} from "./AddItem"

export const WeaponCollection = () => {
    const weapons = useSelector(personageModel.selectors.weapons)

    if (weapons.length === 0) {
        return <>
            <div>Оружие</div>
            <div>
                <ul className="collection">
                    <li key={0}>
                        <AddItem/>
                    </li>
                </ul>
            </div>
        </>
    }

    return (<>
        <div>Оружие</div>
        <div>
            <ul className="collection">
                {weapons.map((weapon, index) => <li key={index}>
                    <div className="card green lighten-4">
                        <div className="card-content" style={{padding: "10px 10px 10px 24px"}}>
                            <p className="card-title black-text"
                               style={{fontSize: "16px", fontWeight: "500px"}}>{weapon.name}</p>
                            <p className="helper-text grey-text">{weapon.type}</p>
                        </div>
                    </div>
                </li>)}
                <li key={weapons.length + 1}>
                    <AddItem/>
                </li>
            </ul>
        </div>
    </>)
}