import React, {useEffect, useState} from "react"
import axios from "axios"

export const Statistics = () => {
    const [stat, setStat] = useState()
    const [click, setClick] = useState(false)

    useEffect(() => {
        const id = JSON.parse(localStorage.getItem("id"))
        axios.get(`/api/personages/search/statistics?id=${id}`).then(res => setStat(res.data))
        console.log(stat)
    }, [click])

    const handleClick = (event) => {
        event.preventDefault()
        setClick(true)
    }

    const handleUpdate = async (event) => {
        event.preventDefault()
        await setClick(false)
        setClick(true)
    }


    if (click) {
        return <div className="col s12">
            <div className="card-panel grey lighten-5 z-depth-1">
                <div className="row">
                    <h4 className="col s3 center-align green-text">{stat.share_of_accepted_invitations}</h4>
                    <h4 className="col s3 center-align green-text">{stat.clothing_count}</h4>
                    <h4 className="col s3 center-align green-text">{stat.weapon_count}</h4>
                    <h4 className="col s3 center-align green-text">{stat.prise_count}</h4>
                </div>
                <div className="row">
                    <p className="col s3 center-align">принятые приглашения</p>
                    <p className="col s3 center-align">одежда</p>
                    <p className="col s3 center-align">оружия</p>
                    <p className="col s3 center-align">призы</p>
                </div>
                <a className="waves-effect waves-light btn-small center-align" onClick={handleUpdate}>Обновить</a>
            </div>
        </div>
    }

    return <div className="col s2 center-align">
        <a className="waves-effect waves-light btn" onClick={handleClick}>Увидеть статистику</a>
    </div>
}