import React, {useEffect} from "react"
import {EVENT, MAIN, PROFILE, ROOT} from "@utils/routes"
import {useNavigate} from "react-router"

export const Navbar = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem("id"))) navigate(ROOT)
    }, [])

    const handleQuiet = () => {
        localStorage.removeItem("id")
    }

    return (
        <nav>
            <div className="nav-wrapper green darken-1">
                <a href="#" className="brand-logo" style={{marginLeft: "10px"}}>Shrek</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href={EVENT}>Мои мероприятия</a></li>
                    <li><a href={MAIN}>Прилашения</a></li>
                    <li><a href={PROFILE}>Профиль</a></li>
                    <li><a href={ROOT} onClick={handleQuiet}>Выйти</a></li>
                </ul>
            </div>
        </nav>
    )
}