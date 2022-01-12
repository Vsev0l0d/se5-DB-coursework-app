import React, {useEffect} from "react"
import {AddWindow} from "./AddWindow"

export const FloatingButton = () => {
    useEffect(() => {
        M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'))
        M.Modal.init(document.querySelectorAll('.modal'))
    }, [])


    return <div className="fixed-action-btn">
        <a className="btn-floating btn-large red modal-trigger" href="#addForm">
            <i className="large material-icons">add</i>
        </a>

        <div id="addForm" className="modal">
            <div className="modal-content">
                <AddWindow/>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Создать</a>
            </div>
        </div>
    </div>
}
