import React, {useEffect} from "react"
import {useSelector} from "react-redux"
import {Preloader} from "@components/Preloader"
import {eventModel} from "@entities/event"
import {Item} from "./Item"

export const Collection = () => {
    const events = useSelector(eventModel.selectors.events)
    const loading = useSelector(eventModel.selectors.loading)

    useEffect(() => {
        console.log("sddsasdas")
        M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'))
        M.Collapsible.init(document.querySelectorAll('.collapsible'))
        M.Modal.init(document.querySelectorAll('.modal'))
        M.Datepicker.init(document.querySelectorAll('.datepicker'), {
            onSelect: (date) => console.log(date)
        })
        M.Timepicker.init(document.querySelectorAll('.timepicker'))
        M.FormSelect.init(document.querySelectorAll('select'))
        // M.AutoInit()
    }, [events])

    if (loading) {
        return <div className="center">
            <Preloader/>
        </div>
    }

    if (events.length === 0) {
        return <div className="center">
            <p>Вы еще ничего не создали</p>
        </div>
    }

    return <ul className="collapsible">
        {events.map((event, index) =>
            <li key={index}>
                <Item event={event} index={index}/>
            </li>
        )}
    </ul>
}