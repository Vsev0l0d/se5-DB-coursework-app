import React, {useEffect, useState} from "react"
import {useNavigate} from "react-router"
import {useSnackbar} from "notistack"
import axios from "axios"
import ShrekPng from "./shrek.png"
import {MAIN} from "@utils/routes"

export const SignInForm = () => {
    const navigate = useNavigate()
    const [id, setId] = useState()
    const snackBar = useSnackbar()

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("id"))) navigate(MAIN)
    }, [])

    const onIdChange = (event) => {
        setId(event.target.value)
    }

    const handleClick = (event) => {
        event.preventDefault()
        axios
            .get(`api/personages/${id}`)
            .then(res => {
                localStorage.setItem("id", JSON.stringify(id))
                navigate(MAIN)
            })
            .catch(err => {
                snackBar.enqueueSnackbar('Введите свой id', {
                    variant: 'error',
                })
            })
    }
    return (
        <div className="start-container">
            <div className="row center">
                <div>
                    <img src={ShrekPng} className="img-shrek"/>
                </div>
                <form className="col s12 white" id="reg-form">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="id" type="text" className="validate" onChange={onIdChange}/>
                            <label className="brown-text" htmlFor="id">Id</label>
                        </div>
                        <button className="btn btn-large btn-register waves-effect waves-light green lighten-1"
                                type="submit"
                                name="action" onClick={handleClick}>Войти
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}