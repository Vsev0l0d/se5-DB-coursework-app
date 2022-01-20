import React, {useEffect, useState} from "react"
import {useDispatch} from "react-redux"
import {personageModel} from "@entities/profile"

export const AddClothing = () => {
    useEffect(() => {
        M.AutoInit()
    }, [])

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const types = ["обмундирование", "праздничный наряд", "пижама"]

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(personageModel.thunks.addClothing(name, type))
    }

    return <div className="row" style={{"marginBottom": "0px"}}>
        <p className="col s5">Хотите добавить новую вещь?</p>
        <div className="col s2 center-align">
            <a href="#addClothing" className="btn-small modal-trigger white">
                <i className="material-icons green-text darken-2">add</i>
            </a>
        </div>

        <div id="addClothing" className="modal">
            <div className="modal-content">
                <div className="row">
                    <span className="col s12">Новая одежда</span>
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="name" type="text" className="validate" onChange={() => {
                                    setName(event.target.value)
                                }}/>
                                <label htmlFor="name">Название</label>
                            </div>

                            <div className="input-field col s12">
                                <select onChange={() => {
                                    setType(event.target.value)
                                }}>
                                    <option value="" disabled selected>Не выбрано</option>
                                    {types.map((type, id) => {
                                        return <option key={id} value={type}>{type}</option>
                                    })}
                                </select>
                                <label>Тип</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="modal-footer">
                <a href="" className="modal-close waves-effect waves-green btn-flat" onClick={handleSubmit}>Создать</a>
            </div>
        </div>
    </div>
}
