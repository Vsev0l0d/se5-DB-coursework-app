import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {blockModel} from "@entities/block"

export const BlackList = () => {
    useEffect(() => {
        M.AutoInit()
    }, [])

    const dispatch = useDispatch()
    const blocked = useSelector(blockModel.selectors.blocking)

    const renderDeleteButton = (index, link) => {
        const handleSubmit = (event) => {
            event.preventDefault()
            dispatch(blockModel.thunks.deleteBlocking(link))
        }

        return <>
            <a href={`#deletespam${index}`} className="btn-small modal-trigger white"><i
                className="material-icons black-text">delete</i></a>

            <div id={`deletespam${index}`} className="modal">
                <div className="modal-content">
                    <div className="row">
                        <span className="col s12">Удалить?</span>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="" className="modal-close waves-effect waves-green btn-flat"
                       onClick={handleSubmit}>Да</a>
                </div>
            </div>
        </>
    }

//ToDo: выводить не id а имя
//ToDo: удаление из чс
    return <>
        <div>Черный список</div>
        <div>
            <ul className="collection">
                <div className="row" style={{"marginBottom": "0px"}}>
                    {blocked.length
                        ? blocked.map((blocked, index) => <li key={index} className="collection-item">
                            <p className="col s6 black-text">{blocked.id.blockedId}</p>
                            <p className="col s5 black-text">{blocked.type}</p>
                            <div className="col s1 left-align helper-text container">
                                {renderDeleteButton(index, blocked["_links"].self.href)}
                            </div>
                        </li>)
                        : <p className="col s3 black-text">Никого</p>}
                </div>
            </ul>
        </div>
    </>
}