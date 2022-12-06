import metricsService from '../../../services/metricsService'
import * as constants from './constants'

class MetricsActions {
    static fetchMetrics= () => {
        return (dispatch, getState) => {
            dispatch({
                type: constants.FETCH_METRICS_PENDING
            })
            return metricsService.fetchMetrics()
                .then(data => dispatch({
                    type: constants.FETCH_METRICS_SUCCESS,
                    payload: data
                }))
                .catch(error => dispatch({
                    type: constants.FETCH_METRICS_FAIL,
                    payload: error
                }))
        }
    }
}

export default MetricsActions