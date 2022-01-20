import React from "react"
import {useSelector} from "react-redux"
import {personageModel} from "@entities/profile"
import {AddClothing} from "./AddClothing"
import {ExchangeClothing} from "./ExchangeClothing"
import {DeleteClothing} from "./DeleteClothing"

export const ClothingCollection = () => {
    const clothing = useSelector(personageModel.selectors.clothing)

    if (clothing.length === 0) {
        return <>
            <div>Одежда</div>
            <div>
                <ul className="collection">
                    <li key={0}>
                        <AddClothing/>
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
                        <li key={index} className="collection-item">
                            <div className="row" style={{"marginBottom": "0px"}}>
                                <p className="col s4 black-text">{clothes.name}</p>
                                <p className="col s4 center-align helper-text grey-text">{clothes.type}</p>
                                <div className="col offset-s3 s1 helper-text container">
                                    <ExchangeClothing clothingLink={clothes["_links"].clothing.href} id={index}/>
                                    <DeleteClothing clothingLink={clothes["_links"].clothing.href} id={index}/>
                                </div>
                            </div>
                        </li>)
                    }
                    <li key={clothing.length + 1} className="collection-item">
                        <AddClothing/>
                    </li>
                </ul>
            </div>
        </>
    )
}