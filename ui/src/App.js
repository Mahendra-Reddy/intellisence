import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import LineChart from './components/charts/lineChart';
import MetricsList from './containers/metricsList';
import { actions as metricsActions } from './store/modules/metrics';
import { selectors as metricsSelectors } from './store/modules/metrics';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const MetricGrid = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  margin: 20
})

const StyledPaper = styled(Paper)({
  marginLeft: 20,
  padding: 10,
  height: 500
})

function App() {
  const metrics = useSelector(metricsSelectors.getMetricData)('HDT1')
  const chartMetrics = useSelector(metricsSelectors.getChartMetrics)('TK1')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(metricsActions.fetchMetrics())
  }, [dispatch])

  return (
    <MetricGrid>
      <MetricsList data={metrics} />
      <StyledPaper elevation={1}>
        <LineChart width={400} height={400} data={chartMetrics} />
      </StyledPaper>
    </MetricGrid>
  );
}

export default App;
