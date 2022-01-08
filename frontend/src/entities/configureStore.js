import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import {invitationModel} from "./invitation/index"
import {personageModel} from "./profile/index"
import {eventModel} from "./event/index"

const configureStore = (initialState) => {
    const rootReducer = combineReducers({
        invitations: invitationModel.reducer,
        profile: personageModel.reducer,
        events: eventModel.reducer
    })

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const middlewares = [thunk, logger]
    return createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(...middlewares)
    ))
}

export default configureStore