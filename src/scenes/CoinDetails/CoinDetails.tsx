import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ReactPlaceholder from 'react-placeholder';
import parse from 'html-react-parser';
import { MdExpandMore } from 'react-icons/md';

import Layout from 'components/Layout';
import { fetchCoinDetails, fetchCoinGraph } from 'store/coin/actions';
import {
  getCoinDetails,
  getCoinDetailsLoading,
  getCoinGraphData,
  getCoinGraphDuration,
  getCoinGraphLoading,
} from 'store/coin/selectors';
import Graph from './components/Graph';
import DetailsHeader from './components/DetailsHeader';
import {
  SBoxContainer,
  SBoxTitle,
  SDescription,
  SMoreContainer,
} from './styled';
import CoinStatistics from './components/CoinStatistics';

const CoinDetails = () => {
  const dispatch = useDispatch();
  const graphData = useSelector(getCoinGraphData());
  const isGraphLoading = useSelector(getCoinGraphLoading());
  const isDetailsLoading = useSelector(getCoinDetailsLoading());
  const details = useSelector(getCoinDetails());
  const days = useSelector(getCoinGraphDuration());
  const { coin } = useParams<{ coin: string }>();
  const [descriptionText, setDescriptionText] = useState('');

  useEffect(() => {
    dispatch(fetchCoinGraph({ coin, days }));
  }, [days]);

  useEffect(() => {
    dispatch(fetchCoinDetails({ coin }));
  }, []);

  useEffect(() => {
    if (details?.description.en) {
      if (details?.description.en.length > 400) {
        setDescriptionText(`${details.description.en.substr(0, 400)} ...`);
      } else {
        setDescriptionText(details.description.en);
      }
    }
  }, [details?.description]);

  const isExpandBtnVisible =
    details?.description.en &&
    details?.description.en.length > 400 &&
    descriptionText.length !== details?.description.en.length;

  return (
    <Layout>
      <DetailsHeader />
      <Graph
        isGraphLoading={isGraphLoading || isDetailsLoading}
        data={graphData}
      />
      <SBoxContainer>
        <SBoxTitle>Description</SBoxTitle>
        <ReactPlaceholder
          type="text"
          ready={!isDetailsLoading}
          showLoadingAnimation
          rows={10}
          color="#E0E0E0"
        >
          <SDescription>{parse(descriptionText)}</SDescription>
          {isExpandBtnVisible && (
            <SMoreContainer
              onClick={() => setDescriptionText(details?.description.en ?? '')}
            >
              <MdExpandMore size="1.5em" />
              <span>More</span>
            </SMoreContainer>
          )}
        </ReactPlaceholder>
      </SBoxContainer>
      <SBoxContainer>
        <SBoxTitle>Statistics</SBoxTitle>
        <CoinStatistics />
      </SBoxContainer>
    </Layout>
  );
};

export default CoinDetails;
