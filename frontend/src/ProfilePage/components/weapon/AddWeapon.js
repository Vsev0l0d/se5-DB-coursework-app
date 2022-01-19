import React, {useEffect, useState} from "react"
import {useDispatch} from "react-redux"
import {personageModel} from "@entities/profile"

export const AddWeapon = () => {
    useEffect(() => {
        M.AutoInit()
    }, [])

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [damage, setDamage] = useState(0)
    const [type, setType] = useState('')
    const types = ["магическое оружие", "оружие"]

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(personageModel.thunks.addWeapon(name, damage, type))
    }

    return <div className="row" style={{"marginBottom": "0px"}}>
        <p className="col s6">Хотите добавить новое оружие?</p>
        <div className="col s4">
            <a href="#addWeapon" className="btn-small modal-trigger white">
                <i className="material-icons green-text text-darken-2">add</i>
            </a>
        </div>

        <div id="addWeapon" className="modal">
            <div className="modal-content">
                <div className="row">
                    <span className="col s12">Новое оружие</span>
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="name" type="text" onChange={() => {
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

                            <div className="input-field col s12">
                                <input id="name" type="number" className="validate" onChange={() => {
                                    setDamage(event.target.value)
                                }}/>
                                <label htmlFor="name">Урон</label>
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