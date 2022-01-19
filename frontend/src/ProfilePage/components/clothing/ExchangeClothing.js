import React, {useEffect, useState} from "react"
import {useDispatch} from "react-redux"
import {personageModel} from "@entities/profile"

export const ExchangeClothing = (props) => {
    useEffect(() => {
        M.AutoInit()
    }, [])

    const dispatch = useDispatch()
    const [id, setId] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()
        if (id != JSON.parse(localStorage.getItem("id"))) {
            dispatch(personageModel.thunks.exchangeClothing(props.clothingLink, id))
        }
    }

    const forId = `exchangeClothing${props.id}`
    const forHref = `#exchangeClothing${props.id}`

    return <>
        <a href={forHref} className="btn-small modal-trigger white"><i
            className="material-icons brown-text">loop</i></a>

        <div id={forId} className="modal">
            <div className="modal-content">
                <div className="row">
                    <span className="col s12">Подарить одежду</span>
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="name" type="number" onChange={(event) => {
                                    setId(event.target.value)
                                }}/>
                                <label htmlFor="name">id кому</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="modal-footer">
                <a href="" className="modal-close waves-effect waves-green btn-flat" onClick={handleSubmit}>Передать</a>
            </div>
        </div>
    </>
}