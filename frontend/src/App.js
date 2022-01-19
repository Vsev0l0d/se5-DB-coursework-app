import React from "react"
import {Provider} from "react-redux"
import configureStore from "./entities/configureStore"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {SnackbarProvider} from "notistack"
import 'materialize-css/dist/js/materialize.min'
import "./style.scss"
import {EVENT, MAIN, PROFILE, ROOT} from "@utils/routes"
import history from "@utils/history"
import {StartPage} from "./StartPage/index"
import {MainPage} from "./MainPage/index"
import {ProfilePage} from "./ProfilePage/index"
import {EventPage} from "./EventPage/index"
import {invitationModel} from "@entities/invitation"
import {personageModel} from "@entities/profile"
import {eventModel} from "@entities/event"
import {locationModel} from "@entities/location"
import {blockModel} from "@entities/block"
import {awardModel} from "@entities/award"

const initialState = {
    invitations: invitationModel.initialState,
    profile: personageModel.initialState,
    events: eventModel.initialState,
    locations: locationModel.initialState,
    blocking: blockModel.initialState,
    awards: awardModel.initialState
}
const store = configureStore(initialState)

export const App = () => {
    return (
        <SnackbarProvider maxSnack={2}>
            <Provider store={store}>
                <Router history={history}>
                    <Routes>
                        <Route exact path={ROOT} element={<StartPage/>}/>
                        <Route path={MAIN} element={<MainPage/>}/>
                        <Route path={PROFILE} element={<ProfilePage/>}/>
                        <Route path={EVENT} element={<EventPage/>}/>
                        <Route path="*" element={<StartPage/>}/>
                    </Routes>
                </Router>
            </Provider>
        </SnackbarProvider>
    )
}
