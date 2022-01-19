import React, {useEffect} from "react"
import {useDispatch} from "react-redux"
import {personageModel} from "@entities/profile"


export const DeleteWeapon = (props) => {
    useEffect(() => {
        M.AutoInit()
    }, [])

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(personageModel.thunks.deleteWeapon(props.weaponLink))
    }

    const forHref = `#deleteWeapon${props.id}`
    const forId = `deleteWeapon${props.id}`
    return <>
        <a href={forHref} className="btn-small modal-trigger white"><i
            className="material-icons black-text">delete</i></a>

        <div id={forId} className="modal">
            <div className="modal-content">
                <div className="row">
                    <span className="col s12">Удалить?</span>
                </div>
            </div>
            <div className="modal-footer">
                <a href="" className="modal-close waves-effect waves-green btn-flat" onClick={handleSubmit}>Да</a>
            </div>
        </div>
    </>
}