import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {eventModel} from "@entities/event"
import {locationModel} from "@entities/location"


export const FloatingButton = () => {
    useEffect(() => {
        M.AutoInit()
    }, [])

    const dispatch = useDispatch()

    const handleClick = (event) => {
        event.preventDefault()
        dispatch(eventModel.thunks.addEvent(name, description, location, dateStart, dateEnd, [], [], visibility))
    }

    const thingTypes = ["магическое оружие", "оружие", "обмундирование", "праздничный наряд", "пижама"]
    const personageTypes = [""]

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [dateStart, setDateStart] = useState('')
    const [timeStart, setTimeStart] = useState('')
    const [dateEnd, setDateEnd] = useState('')
    const [timeEnd, setTimeEnd] = useState('')
    const [location, setLocation] = useState('')
    const [thingControl, setThingControl] = useState()
    const [visibility, setVisibility] = useState(false)

    const locations = useSelector(locationModel.selectors.locations)

    useEffect(() => {
        const selected = document.querySelectorAll("#weapon-select option:checked")
        const values = Array.from(selected).map(element => element.value)
    }, [])


    return <div className="fixed-action-btn">
        <a href="#addForm" className="btn-floating btn-large red modal-trigger">
            <i className="large material-icons">add</i>
        </a>

        <div id="addForm" className="modal">
            <div className="modal-content">
                <div className="row">
                    <span className="col s12">Новое мероприятие</span>
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="name" type="text"
                                       onChange={(event) => setName(event.target.value)}/>
                                <label htmlFor="name">Название</label>
                            </div>
                            <div className="input-field col s12">
                    <textarea id="description" className="materialize-textarea"
                              onChange={(event) => setDescription(event.target.value)}/>
                                <label htmlFor="description">Описание</label>
                            </div>

                            <div className="input-field col s6">
                                <input type="text" className="datepicker"
                                       onChange={(event) => setDateStart(event.target.value)}/>
                                <label htmlFor="date">Дата начала</label>
                            </div>

                            <div className="input-field col s6">
                                <input type="text" className="timepicker"
                                       onChange={(event) => setTimeStart(event.target.value)}/>
                                <label htmlFor="date">Время</label>
                            </div>

                            <div className="input-field col s6">
                                <input type="text" className="datepicker"
                                       onChange={(event) => setDateEnd(event.target.value)}/>
                                <label htmlFor="date">Дата окончания</label>
                            </div>

                            <div className="input-field col s6">
                                <input type="text" className="timepicker"
                                       onChange={(event) => setTimeEnd(event.target.value)}/>
                                <label htmlFor="date">Время</label>
                            </div>

                            <div className="input-field col s12">
                                <select style={{bottom: 'initial'}}
                                        onChange={(event) => setLocation(event.target.value)}>
                                    <option value="" disabled>Не выбрано</option>
                                    {
                                        locations.map((location, index) => {
                                            return <option key={index}
                                                           value={location["_links"].self.href}>{location.name}</option>
                                        })
                                    }
                                </select>
                                <label>Место проведения</label>
                            </div>

                            <div className="input-field col s12">
                                <select id="weapon-select" multiple style={{bottom: 'initial'}}>
                                    <option value="">Не выбрано</option>
                                    {thingTypes.map((type, index) => {
                                        return <option key={index} value={type}>{type}</option>
                                    })}
                                </select>
                                <label>Необходимое оружие/одежда</label>
                            </div>

                            <div className="input-field col s12">
                                <select multiple style={{bottom: 'initial'}}>
                                    <option value="" selected>Не выбрано</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                                <label>Ограничения на тип приглашеннных</label>
                            </div>

                            <div className="input-field col s12">
                                <div className="switch">
                                    <label>
                                        Частное
                                        <input type="checkbox"
                                               onChange={(event) => setVisibility(event.target.value === "on")}/>
                                        <span className="lever"/>
                                        Публичное
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="modal-footer">
                <a href="" className="modal-close waves-effect waves-green btn-flat"
                   onClick={handleClick}>Создать</a>
            </div>
        </div>
    </div>
}
