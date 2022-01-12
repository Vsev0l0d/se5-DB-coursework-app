import React, {useEffect} from "react"

export const AddWindow = () => {

    useEffect(() => {
        M.AutoInit()
    }, [])

    return <div className="row">
        <span className="col s12">Новое мероприятие</span>
        <form className="col s12">
            <div className="row">
                <div className="input-field col s12">
                    <input id="name" type="text" className="validate"/>
                    <label htmlFor="name">Название</label>
                </div>

                <div className="input-field col s12">
                    <textarea id="description" className="materialize-textarea"/>
                    <label htmlFor="description">Описание</label>
                </div>

                <div className="input-field col s12">
                    <input type="date" className="datepicker"/>
                    <label htmlFor="date">Дата</label>
                </div>

                <div className="input-field col s12">
                    <input type="text" className="timepicker"/>
                    <label htmlFor="date">Время</label>
                </div>

                <div className="input-field col s12">
                    <select>
                        <option value="" disabled selected>Не выбрано</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                    <label>Место проведения</label>
                </div>

                <div className="input-field col s12">
                    <select multiple>
                        <option value="" disabled selected>Не выбрано</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                    <label>Необходимое оружие/одежда</label>
                </div>

                <div className="input-field col s12">
                    <select multiple>
                        <option value="" disabled selected>Не выбрано</option>
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
                            <input type="checkbox"/>
                            <span className="lever"/>
                            Публичное
                        </label>
                    </div>
                </div>
            </div>
        </form>
    </div>

}