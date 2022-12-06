import _ from 'lodash'

export const getMetrics = (state) => {
    return _.get(state, 'metrics.result.current.data', {})
}

export const getMetricById = (state) => (metric) => _.get(state, `metrics.result.current.data.${metric}`, {})

export const getMetricData = (state) => (metric) => {
    const data = getMetricById(state)(metric)
    let formatData = []
    for (let key in data) {
        if (key.startsWith(metric)) {
            let length = data[key].values && data[key].values.length 
            let val =  data[key].values && data[key].values[length-1]
            formatData.push({
                title: key,
                value: val
            })
        }
    }
    return formatData
}

export const getChartMetrics = (state) => (metric) => {
    const data = getMetricById(state)(metric)
    const formatData = []
    for( let key in data){
        if(key.startsWith(metric)){
            let timeslength = data[key].times && data[key].times.length 
            let times =  data[key].times && data[key].values[timeslength-1]
            let Valueslength = data[key].values && data[key].values.length 
            let values =  data[key].values && data[key].values[Valueslength-1]
            formatData.push({
                times,
                values
            })
        }
    }
    return formatData
}