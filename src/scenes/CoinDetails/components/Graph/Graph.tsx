import React, { RefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { SBoxContainer } from 'scenes/CoinDetails/styled';
import GraphRanges from './components/GraphRanges';
import { priceGraphOptions } from '../../../../constants';

interface Props {
  data: number[][];
  isGraphLoading: boolean;
}

const SWrapper = styled.div`
  width: 100%;
`;

const Graph = ({ data, isGraphLoading }: Props) => {
  const [options, setOptions] = useState(priceGraphOptions);
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
          name: 'Value',
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
      <SBoxContainer>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          ref={graphRef}
          immutable
        />
      </SBoxContainer>
    </SWrapper>
  );
};

export default Graph;
