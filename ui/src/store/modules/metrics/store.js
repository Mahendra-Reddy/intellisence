import * as constants from './constants'
import reducer from './reducers'
const initialState = {
    status: 'init',
    error: undefined
}
const store = (state = initialState, action) => {
    switch (action.type) {
        case constants.FETCH_METRICS_PENDING:
            return reducer.fetchMetricsPending(state, action)
        case constants.FETCH_METRICS_SUCCESS:
            return reducer.fetchMetricsSucess(state, action)
        case constants.FETCH_METRICS_FAIL:
            return reducer.fetchMetricsFail(state, action)
        default:
            return state
    }
}

export default store