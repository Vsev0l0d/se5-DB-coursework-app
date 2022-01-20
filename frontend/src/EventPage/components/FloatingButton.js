import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import dateFormat from "dateformat"
import {optionalModel} from "@entities/optional"
import {eventModel} from "@entities/event"

export const FloatingButton = () => {
    const dispatch = useDispatch()

    const handleClick = async (event) => {
        event.preventDefault()
        const timeStart = document.getElementById('timeStart').value
        const dateStart = document.getElementById('dateStart').value
        const timeEnd = document.getElementById('timeEnd').value
        const dateEnd = document.getElementById('dateEnd').value

        const partsStart = timeStart.match(/(\d+):(\d+) (\w+)/)
        const hoursStart = /am/i.test(partsStart[3]) ?
            function (am) {
                return am < 12 ? am : 0
            }(parseInt(partsStart[1], 10)) :
            function (pm) {
                return pm < 12 ? pm + 12 : 12
            }(parseInt(partsStart[1], 10))
        const minutesStart = parseInt(partsStart[2], 10)

        const partsEnd = timeEnd.match(/(\d+):(\d+) (\w+)/)
        const hoursEnd = /am/i.test(partsEnd[3]) ?
            function (am) {
                return am < 12 ? am : 0
            }(parseInt(partsEnd[1], 10)) :
            function (pm) {
                return pm < 12 ? pm + 12 : 12
            }(parseInt(partsEnd[1], 10))
        const minutesEnd = parseInt(partsEnd[2], 10)

        const start = new Date(dateStart)
        start.setHours(hoursStart)
        start.setMinutes(minutesStart)

        const end = new Date(dateEnd)
        end.setHours(hoursEnd)
        end.setMinutes(minutesEnd)

        const formattedDateStart = dateFormat(start, 'yyyy-mm-dd\'T\'hh:MM:ss')
        const formattedDateEnd = dateFormat(end, 'yyyy-mm-dd\'T\'hh:MM:ss')

        const selectedThingTypes = document.querySelectorAll("#thingControl-select option:checked")
        const thingControl = Array.from(selectedThingTypes).map(element => element.value)

        const selectedPersonageTypes = document.querySelectorAll("#personageControl-select option:checked")
        const personageTypeId = Array.from(selectedPersonageTypes).map(element => element.value)

        console.log(personageTypeId)
        await dispatch(eventModel.thunks.addEvent(name, description, location, formattedDateStart, formattedDateEnd, thingControl, personageTypeId, visibility))
    }

    const locations = useSelector(optionalModel.selectors.locations)
    const personageTypes = useSelector(optionalModel.selectors.personageTypes)
    const thingTypes = ["магическое оружие", "оружие", "обмундирование", "праздничный наряд", "пижама"]

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [visibility, setVisibility] = useState(false)

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
                                <input type="text" className="datepicker" id="dateStart"/>
                                <label htmlFor="dateStart">Дата начала</label>
                            </div>

                            <div className="input-field col s6">
                                <input type="text" className="timepicker" id="timeStart"/>
                                <label htmlFor="timeStart">Время</label>
                            </div>

                            <div className="input-field col s6">
                                <input type="text" className="datepicker" id="dateEnd"/>
                                <label htmlFor="dateEnd">Дата окончания</label>
                            </div>

                            <div className="input-field col s6">
                                <input type="text" className="timepicker" id="timeEnd"/>
                                <label htmlFor="timeEnd">Время</label>
                            </div>

                            <div className="input-field col s12">
                                <select
                                    onChange={(event) => setLocation(event.target.value)}>
                                    <option selected disabled value="">Не выбрано</option>
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
                                <select id="thingControl-select" multiple>
                                    <option value="">Не выбрано</option>
                                    {thingTypes.map((type, index) => {
                                        return <option key={index} value={type}>{type}</option>
                                    })}
                                </select>
                                <label>Необходимое оружие/одежда</label>
                            </div>

                            <div className="input-field col s12">
                                <select id="personageControl-select" multiple>
                                    <option value="">Не выбрано</option>
                                    {personageTypes.map((type, index) => {
                                        return <option value={type.id} key={index}>{type.name}</option>
                                    })}
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
