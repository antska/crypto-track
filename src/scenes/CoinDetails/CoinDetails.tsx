import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ReactPlaceholder from 'react-placeholder';
import parse from 'html-react-parser';
import { MdExpandMore } from 'react-icons/md';
import { Redirect } from 'react-router-dom';

import Layout from 'components/Layout';
import { fetchCoinDetails, fetchCoinGraph } from 'store/coin/actions';
import {
  getCoinDetails,
  getCoinDetailsError,
  getCoinDetailsLoading,
  getCoinGraphData,
  getCoinGraphDuration,
  getCoinGraphLoading,
} from 'store/coin/selectors';
import SEO from 'components/SEO';
import { getCurrency } from 'store/global/selectors';
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
  const error = useSelector(getCoinDetailsError());
  const details = useSelector(getCoinDetails());
  const currency = useSelector(getCurrency());
  const days = useSelector(getCoinGraphDuration());
  const { coin } = useParams<{ coin: string }>();
  const [descriptionText, setDescriptionText] = useState('');

  // fetch coin graph data (based on days/currency)
  useEffect(() => {
    dispatch(fetchCoinGraph({ coin, days, currency: currency.name }));
  }, [days, currency.name]);

  // fetch coin details
  useEffect(() => {
    dispatch(fetchCoinDetails({ coin }));
  }, []);

  // update description text based on text length
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

  if (error) {
    return <Redirect to="/error" />;
  }

  return (
    <Layout>
      <SEO
        title={`Crypto Track  ${
          details?.symbol ? `- ${details.symbol.toUpperCase()}` : ''
        }`}
      />
      <ReactPlaceholder
        type="text"
        ready={!isDetailsLoading}
        showLoadingAnimation
        rows={4}
      >
        <DetailsHeader />
      </ReactPlaceholder>
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
        >
          <SDescription data-test="description-block">
            {parse(descriptionText)}
          </SDescription>
          {isExpandBtnVisible && details?.description.en && (
            <SMoreContainer
              data-test="expand-btn"
              onClick={() => setDescriptionText(details?.description.en)}
            >
              <MdExpandMore size="1.5em" />
              <span>More</span>
            </SMoreContainer>
          )}
        </ReactPlaceholder>
      </SBoxContainer>
      <SBoxContainer>
        <SBoxTitle>Statistics</SBoxTitle>
        <ReactPlaceholder
          type="text"
          ready={!isDetailsLoading}
          showLoadingAnimation
          rows={10}
          color="#E0E0E0"
        >
          <CoinStatistics />
        </ReactPlaceholder>
      </SBoxContainer>
    </Layout>
  );
};

export default CoinDetails;
