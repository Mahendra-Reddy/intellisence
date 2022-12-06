import axios from 'axios'

const metricsService = {
    fetchMetrics: async () => {
        const response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_BASE_URL}/reference`
        })
        return response.data
    }
}

export default metricsService