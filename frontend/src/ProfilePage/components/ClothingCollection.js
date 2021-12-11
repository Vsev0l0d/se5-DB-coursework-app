import React from "react"
import {useSelector} from "react-redux"
import {personageModel} from "@entities/profile"
import {AddItem} from "./AddItem"

export const ClothingCollection = () => {
    const clothing = useSelector(personageModel.selectors.clothing)

    if (clothing.length === 0) {
        return <>
            <div>Одежда</div>
            <div>
                <ul className="collection">
                    <li key={0}>
                        <AddItem/>
                    </li>
                </ul>
            </div>
        </>
    }

    return (
        <>
            <div>Одежда</div>
            <div>
                <ul className="collection">
                    {clothing.map((clothes, index) =>
                        <li key={index}>
                            <div className="card green lighten-4">
                                <div className="card-content" style={{padding: "10px"}}>
                                    <p className="card-title black-text"
                                       style={{fontSize: "14px", fontWeight: "bold"}}>{clothes.name}</p>
                                    <p className="helper-text grey-text">{clothes.type}</p>
                                </div>
                            </div>
                        </li>)
                    }
                    <li key={clothing.length + 1}>
                        <AddItem/>
                    </li>
                </ul>
            </div>
        </>
    )
}