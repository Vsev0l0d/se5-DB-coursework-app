import React, {useEffect} from "react"
import {useDispatch} from "react-redux"
import {personageModel} from "@entities/profile"

export const DeleteClothing = (props) => {
    useEffect(() => {
        M.AutoInit()
    }, [])


    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(personageModel.thunks.deleteClothing(props.clothingLink))
    }


    const forHref = `#deleteClothing${props.id}`
    const forId = `deleteClothing${props.id}`

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