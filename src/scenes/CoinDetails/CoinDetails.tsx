import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import Layout from 'components/Layout';
import { fetchCoinDetails, fetchCoinGraph } from 'store/coin/actions';
import {
  getCoinDetails,
  getCoinDetailsLoading,
  getCoinGraphData,
  getCoinGraphDuration,
  getCoinGraphLoading,
} from 'store/coin/selectors';
import PercentageField from 'components/PercentageField';
import Graph from './components/Graph';
import DetailsHeaer from './components/DetailsHeader';
// import DetailsBody from './components/DetailsBody';
import { SBoxContainer } from './styled';
import { CHANGE_PERCENTAGES } from '../../constants';

const CoinDetails = () => {
  const dispatch = useDispatch();
  const graphData = useSelector(getCoinGraphData());
  const isGraphLoading = useSelector(getCoinGraphLoading());
  const isDetailsLoading = useSelector(getCoinDetailsLoading());
  const details = useSelector(getCoinDetails());
  const days = useSelector(getCoinGraphDuration());
  const { coin } = useParams<{ coin: string }>();

  useEffect(() => {
    dispatch(fetchCoinGraph({ coin, days }));
  }, [days]);

  useEffect(() => {
    dispatch(fetchCoinDetails({ coin }));
  }, []);

  return (
    <Layout>
      <DetailsHeaer />
      <Graph
        isGraphLoading={isGraphLoading || isDetailsLoading}
        data={graphData}
      />
      <SBoxContainer>
        <h2>Description</h2>
        <p
          dangerouslySetInnerHTML={{ __html: details?.description.en ?? '' }}
        />
      </SBoxContainer>
      <SBoxContainer>
        <h2>Statistics</h2>
        <div>
          <table>
            <tbody>
              {CHANGE_PERCENTAGES.map((price) => (
                <tr key={price.value}>
                  <td>{price.name}</td>
                  <PercentageField
                    perc={details?.market_data[price.value] as number}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SBoxContainer>
    </Layout>
  );
};

export default CoinDetails;
