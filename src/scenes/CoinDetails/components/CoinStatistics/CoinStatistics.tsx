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

  const athPrice =
    (details?.market_data?.ath as Currency)?.usd?.toLocaleString() ?? '';
  const atlPrice =
    (details?.market_data?.atl as Currency)?.usd?.toLocaleString() ?? '';
  const low24h =
    (details?.market_data?.low_24h as Currency)?.usd?.toLocaleString() ?? '';
  const high24h =
    (details?.market_data?.high_24h as Currency)?.usd?.toLocaleString() ?? '';

  const athPriceDate = useMemo(
    () =>
      moment((details?.market_data?.ath_date as ATHLDate)?.usd).format(
        "MMM Do 'YY",
      ),
    [details],
  );

  const atlPriceDate = useMemo(
    () =>
      moment((details?.market_data?.atl_date as ATHLDate)?.usd).format(
        "MMM Do 'YY",
      ),
    [details],
  );

  useEffect(() => {
    setOptionsUpVotes({
      ...optionsUpVotes,
      title: { text: 'Up Votes' },
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
      title: { text: 'Down Votes' },
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
  ]);

  return (
    <SContainer>
      <STable>
        <tbody>
          <tr>
            <th>Lowest 24h</th>
            <td>${low24h}</td>
          </tr>
          <tr>
            <th>Highest 24h</th>
            <td>${high24h}</td>
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
              ${athPrice}
              <p>{athPriceDate}</p>
            </td>
          </tr>
          <tr>
            <th>ATL & Date</th>
            <td>
              ${atlPrice}
              <p>{atlPriceDate}</p>
            </td>
          </tr>
        </tbody>
      </STable>

      <STable>
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
      <SChartContainer>
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
