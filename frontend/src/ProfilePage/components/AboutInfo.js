import React from "react"
import {useSelector} from "react-redux"
import {personageModel} from "@entities/profile"
import {Preloader} from "@components/Preloader"

export const AboutInfo = () => {
    const profile = useSelector(personageModel.selectors.profile)

    if (profile.length === 0) {
        return <Preloader/>
    }

    return (
        <div className="col s12 m6 offset-m2 l6 offset-l3">
            <div className="card-panel grey lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                    <div className="col s2">
                        <i className="large material-icons">account_circle</i>
                    </div>
                    <div className="col s10">
                        <span className="black-text title">
                            {profile[0].name}
                        </span>
                        <br/>
                        <span className="grey-text small">
                            {profile[0]["personageType"].name}
                        </span>
                    </div>
                </div>
                <div className="row valign-wrapper">
                    <div className="col s12">
                        <span className="grey-text light small helper-text">
                            {profile[0]["personageType"].description}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}