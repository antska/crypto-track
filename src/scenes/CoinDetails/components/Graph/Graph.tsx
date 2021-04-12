import React, { RefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useSelector } from 'react-redux';

import { SBoxContainer } from 'scenes/CoinDetails/styled';
import { getCurrency, getTheme } from 'store/global/selectors';
import { priceGraphOptions } from 'constants/options';
import GraphRanges from './components/GraphRanges';

interface Props {
  data: number[][];
  isGraphLoading: boolean;
}

const SWrapper = styled.div`
  width: 100%;
`;

const Graph = ({ data, isGraphLoading }: Props) => {
  const [options, setOptions] = useState(priceGraphOptions);
  const currency = useSelector(getCurrency());
  const theme = useSelector(getTheme());
  const graphRef = useRef<{
    chart: Highcharts.Chart;
    container: RefObject<HTMLDivElement>;
  }>(null);

  // show/hide loading indicator on graph but updating its state
  useEffect(() => {
    if (graphRef && graphRef.current) {
      if (isGraphLoading) {
        graphRef.current.chart.showLoading();
      } else {
        graphRef.current.chart.hideLoading();
      }
    }
  }, [graphRef, isGraphLoading]);

  // set graph options
  useEffect(() => {
    const bgColor = theme === 'light' ? '#F5F5F5' : '#464646';
    const textColor = theme === 'light' ? '#464646' : 'white';

    setOptions({
      ...options,
      chart: {
        backgroundColor: bgColor,
      },
      title: {
        text: 'Price Change Chart',
        style: { color: textColor },
      },
      yAxis: {
        title: {
          text: `Price (${currency.name.toUpperCase()})`,
          style: { color: textColor },
        },
        labels: {
          style: { color: textColor },
        },
      },
      xAxis: {
        labels: {
          style: { color: textColor },
        },
        type: 'datetime',
      },
      series: [
        {
          type: 'area',
          name: 'Value',
          color: '#0f748e',
          data,
          tooltip: {
            valueDecimals: 2,
            valuePrefix: currency.symbol,
          },
        },
      ],
    });
  }, [data, currency.symbol, theme]);

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
