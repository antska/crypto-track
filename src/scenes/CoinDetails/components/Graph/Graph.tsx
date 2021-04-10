import React, { RefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import GraphRanges from './components/GraphRanges';
import defaultOptions from './defaultOptions';

interface Props {
  data: number[][];
  isGraphLoading: boolean;
}

const SChartContainer = styled.div`
  background: white;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 10px;
  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);
  padding: 5px;
  width: 100%;
`;

const SWrapper = styled.div`
  width: 100%;
`;

const Graph = ({ data, isGraphLoading }: Props) => {
  const [options, setOptions] = useState(defaultOptions);
  const graphRef = useRef<{
    chart: Highcharts.Chart;
    container: RefObject<HTMLDivElement>;
  }>(null);

  useEffect(() => {
    if (graphRef && graphRef.current) {
      if (isGraphLoading) {
        graphRef.current.chart.showLoading();
      } else {
        graphRef.current.chart.hideLoading();
      }
    }
  }, [graphRef, isGraphLoading]);

  useEffect(() => {
    setOptions({
      ...options,
      series: [
        {
          type: 'area',
          name: 'Bitcoin',
          color: '#0f748e',
          data,
          tooltip: {
            valueDecimals: 2,
            valuePrefix: '$',
          },
        },
      ],
    });
  }, [data]);

  return (
    <SWrapper>
      <GraphRanges />
      <SChartContainer>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          ref={graphRef}
          immutable
        />
      </SChartContainer>
    </SWrapper>
  );
};

export default Graph;
