import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import Layout from 'components/Layout';
import { fetchCoinDetails, fetchCoinGraph } from 'store/coin/actions';
import {
  // getCoinDetails,
  getCoinDetailsLoading,
  getCoinGraphData,
  getCoinGraphDuration,
  getCoinGraphLoading,
} from 'store/coin/selectors';
import Graph from './components/Graph';
import DetailsHeaer from './components/DetailsHeader';
import DetailsBody from './components/DetailsBody';

const CoinDetails = () => {
  const dispatch = useDispatch();
  const graphData = useSelector(getCoinGraphData());
  const isGraphLoading = useSelector(getCoinGraphLoading());
  const isDetailsLoading = useSelector(getCoinDetailsLoading());
  // const details = useSelector(getCoinDetails());
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
      <DetailsBody />
    </Layout>
  );
};

export default CoinDetails;
