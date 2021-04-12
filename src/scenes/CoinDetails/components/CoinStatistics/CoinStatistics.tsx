import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';
import Highcharts from 'highcharts';
import highchartsMore from 'highcharts/highcharts-more';
import solidGauge from 'highcharts/modules/solid-gauge';
import HighchartsReact from 'highcharts-react-official';

import { getCoinDetails } from 'store/coin/selectors';
import { SContainer, STable } from 'scenes/CoinDetails/styled';
import PercentageField from 'components/PercentageField';
import { ATHLDate, Currency } from 'store/coin/types';
import { getCurrency, getTheme } from 'store/global/selectors';
import {
  CHANGE_PERCENTAGES,
  DEVELOPER_STATS,
  gaugeOptions,
  SOCIAL_STATS,
} from '../../../../constants';

highchartsMore(Highcharts);
solidGauge(Highcharts);

const SChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  .chartContainer {
    width: 200px;
    height: 150px;
  }
`;

const SH3 = styled.h3`
  font-weight: 500;
  text-align: center;
`;

const CoinStatistics = () => {
  const [optionsUpVotes, setOptionsUpVotes] = useState(gaugeOptions);
  const [optionsDownVotes, setOptionsDownVotes] = useState(gaugeOptions);
  const details = useSelector(getCoinDetails());
  const currency = useSelector(getCurrency());
  const theme = useSelector(getTheme());

  const athPrice =
    (details?.market_data?.ath as Currency)?.[
      currency.name
    ]?.toLocaleString() ?? '';
  const atlPrice =
    (details?.market_data?.atl as Currency)?.[
      currency.name
    ]?.toLocaleString() ?? '';
  const low24h =
    (details?.market_data?.low_24h as Currency)?.[
      currency.name
    ]?.toLocaleString() ?? '';
  const high24h =
    (details?.market_data?.high_24h as Currency)?.[
      currency.name
    ]?.toLocaleString() ?? '';

  const athPriceDate = useMemo(
    () =>
      moment(
        (details?.market_data?.ath_date as ATHLDate)?.[currency.name],
      ).format("MMM Do 'YY"),
    [details],
  );

  const atlPriceDate = useMemo(
    () =>
      moment(
        (details?.market_data?.atl_date as ATHLDate)?.[currency.name],
      ).format("MMM Do 'YY"),
    [details],
  );

  useEffect(() => {
    setOptionsUpVotes({
      ...optionsUpVotes,
      chart: {
        type: 'solidgauge',
        backgroundColor: theme === 'light' ? '#F5F5F5' : '#464646',
      },
      title: {
        text: 'Up Votes',
        style: { color: theme === 'light' ? '#464646' : 'white' },
      },
      series: [
        {
          name: 'Up Votes',
          data: [details?.sentiment_votes_up_percentage ?? 0],
          dataLabels: {
            format:
              '<div style="text-align:center">' +
              '<span>{y}%</span><br/>' +
              '</div>',
          },
        },
      ],
    });

    setOptionsDownVotes({
      ...optionsDownVotes,
      chart: {
        type: 'solidgauge',
        backgroundColor: theme === 'light' ? '#F5F5F5' : '#464646',
      },
      title: {
        text: 'Down Votes',
        style: { color: theme === 'light' ? '#464646' : 'white' },
      },
      series: [
        {
          name: 'Down Votes',
          data: [details?.sentiment_votes_down_percentage ?? 0],
          dataLabels: {
            format:
              '<div style="text-align:center">' +
              '<span>{y}%</span><br/>' +
              '</div>',
          },
        },
      ],
    });
  }, [
    details?.sentiment_votes_up_percentage,
    details?.sentiment_votes_down_percentage,
    theme,
  ]);

  return (
    <SContainer>
      <STable data-test="value-stats-table">
        <tbody>
          <tr>
            <th>Lowest 24h</th>
            <td>
              {currency.symbol}
              {low24h}
            </td>
          </tr>
          <tr>
            <th>Highest 24h</th>
            <td>
              {currency.symbol}
              {high24h}
            </td>
          </tr>
          {CHANGE_PERCENTAGES.map((price) => (
            <tr key={price.value}>
              <th>{price.name}</th>
              <td>
                <PercentageField
                  perc={details?.market_data[price.value] as number}
                />
              </td>
            </tr>
          ))}
          <tr>
            <th>ATH & Date</th>
            <td>
              {currency.symbol}
              {athPrice}
              <p>{athPriceDate}</p>
            </td>
          </tr>
          <tr>
            <th>ATL & Date</th>
            <td>
              {currency.symbol}
              {atlPrice}
              <p>{atlPriceDate}</p>
            </td>
          </tr>
        </tbody>
      </STable>

      <STable data-test="social-stats-table">
        <tbody>
          <tr>
            <th colSpan={2} style={{ textAlign: 'center' }}>
              Social Stats
            </th>
          </tr>
          {SOCIAL_STATS.map((social) => (
            <tr key={social.value}>
              <th>{social.name}</th>
              <td>
                {details?.community_data[social.value]
                  ? details?.community_data[social.value].toLocaleString()
                  : '-'}
              </td>
            </tr>
          ))}
          <tr />
          <tr>
            <th colSpan={2} style={{ textAlign: 'center' }}>
              Developer Stats
            </th>
          </tr>
          {DEVELOPER_STATS.map((dev) => (
            <tr key={dev.value}>
              <th>{dev.name}</th>
              <td>{details?.developer_data[dev.value]}</td>
            </tr>
          ))}
        </tbody>
      </STable>
      <SChartContainer data-test="reputation-graphs">
        <SH3>Reputation Score</SH3>
        <HighchartsReact
          highcharts={Highcharts}
          options={optionsUpVotes}
          immutable
          containerProps={{ className: 'chartContainer' }}
        />
        <HighchartsReact
          highcharts={Highcharts}
          options={optionsDownVotes}
          immutable
          containerProps={{ className: 'chartContainer' }}
        />
      </SChartContainer>
    </SContainer>
  );
};

export default CoinStatistics;
