class MetricsReducer {
    static fetchMetricsPending = ((state, action) => {
        return {
            ...state,
            status: 'pending'
        }
    });
    static fetchMetricsSucess = ((state, action) => {
        return {
            ...state,
            status: 'success',
            error: false,
            result: action.payload
        }
    });
    static ferchMetricsFail = ((state, action) => {
        return {
            ...state,
            status: 'error',
            error: true
        }
    });
}

export default MetricsReducer