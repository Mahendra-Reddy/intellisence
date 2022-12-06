import { configureStore, applyMiddleware, compose, combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import {store as metricsStore} from './modules/metrics'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({
    metrics: metricsStore
})

const store = configureStore(
    { reducer: reducers },
    composeEnhancers(applyMiddleware(thunk))
)

export default store;