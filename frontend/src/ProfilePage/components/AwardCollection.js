import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {awardModel} from "@entities/award"

export const AwardCollection = () => {
    useEffect(() => {
        M.AutoInit()
    }, [])

    const dispatch = useDispatch()
    const awards = useSelector(awardModel.selectors.awards)

    const renderDeleteButton = (index, link) => {
        const handleSubmit = (event) => {
            event.preventDefault()
            dispatch(awardModel.thunks.deleteAward(link))
        }

        return <>
            <a href={`#deleteAward${index}`} className="btn-small modal-trigger white"><i
                className="material-icons black-text">delete</i></a>

            <div id={`deleteAward${index}`} className="modal">
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

    return (<>
        <div>Награды</div>
        <div>
            <ul className="collection">
                {awards.map((award, index) =>
                    <li key={index} className="collection-item">
                        <div className="row" style={{"marginBottom": "0px"}}>
                            <p className="col s6 black-text">{award.type}</p>
                            <p className="col s5 center-align helper-text grey-text">{award.eventId}</p>
                            <div className="col s1 left-align helper-text container">
                                {renderDeleteButton(index, award["_links"].self.href)}
                            </div>
                        </div>
                    </li>)}
            </ul>
        </div>
    </>)
}