import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Redirect } from 'react-router-dom';
import ReactPlaceholder from 'react-placeholder';
import { TextRow } from 'react-placeholder/lib/placeholders';

import Layout from 'components/Layout';
import { fetchMarketsList } from 'store/markets/actions';
import {
  getCoinMarketsList,
  getHasErrorMarkets,
  getIsLoadingMarkets,
} from 'store/markets/selectors';
import PercentageField from 'components/PercentageField';
import SEO from 'components/SEO';
import { getCurrency } from 'store/global/selectors';
import { FETCH_INTERVAL_MS } from 'constants/index';
import {
  SImage,
  SLink,
  SNameContainer,
  SNameField,
  SNumber,
  SPriceField,
  SSymbolField,
  STable,
  STableWrapper,
} from './styled';
import TableHeader from './components/TableHeader';

const headerNames = ['Name', 'Price (USD)', '24h %', '24h High', '24h Low'];

const CoinsList = () => {
  const dispatch = useDispatch();
  const coins = useSelector(getCoinMarketsList());
  const error = useSelector(getHasErrorMarkets());
  const currency = useSelector(getCurrency());
  const isLoading = useSelector(getIsLoadingMarkets());
  const { page } = useParams<{ page: string }>();

  const currentPage = page ? Number.parseInt(page, 10) : 1;

  const fetchData = useCallback((pageNum: number, curr: string) => {
    dispatch(fetchMarketsList({ page: pageNum, currency: curr }));
  }, []);

  // fetch coin list data in intervals
  useEffect(() => {
    const interval = setInterval(
      () => fetchData(currentPage, currency.name),
      FETCH_INTERVAL_MS,
    );

    return () => {
      clearInterval(interval);
    };
  }, [currentPage, currency.name]);

  // fetch coin list data when page or currency changes
  useEffect(() => {
    fetchData(currentPage, currency.name);
  }, [currentPage, currency.name]);

  if (error) {
    return <Redirect to="/error" />;
  }

  return (
    <Layout>
      <SEO title="Crypto Track - Homepage" />
      <TableHeader page={currentPage} />
      <STableWrapper>
        <STable>
          <thead>
            <tr>
              <th>#</th>
              {headerNames.map((name) => (
                <th key={name}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {!isLoading ? (
              coins.map((item, index) => (
                <tr key={`row-${item.name}`} data-test="coin-item-row">
                  {/* correctly add counting based on current page and per page results */}
                  <SNumber>{(currentPage - 1) * 50 + index + 1}</SNumber>
                  <td>
                    <SLink to={`/coins/${item.id}`}>
                      <SNameContainer>
                        <SImage src={item.image} alt={item.name} />
                        <div>
                          <SSymbolField>{item.symbol}</SSymbolField>
                          <SNameField>{item.name}</SNameField>
                        </div>
                      </SNameContainer>
                    </SLink>
                  </td>
                  <SPriceField>
                    {currency.symbol}
                    {item?.current_price?.toLocaleString()}
                  </SPriceField>
                  <td>
                    <PercentageField perc={item?.price_change_percentage_24h} />
                  </td>
                  <td>
                    {currency.symbol}
                    {item?.high_24h?.toLocaleString()}
                  </td>
                  <td>
                    {currency.symbol}
                    {item?.low_24h?.toLocaleString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                {[...headerNames, ''].map((key) => (
                  <td key={`placeholder-${key}`}>
                    <ReactPlaceholder
                      type="text"
                      ready={!isLoading}
                      showLoadingAnimation
                      rows={50}
                      color="#E0E0E0"
                    >
                      <TextRow color="#E0E0E0" />
                    </ReactPlaceholder>
                  </td>
                ))}
              </tr>
            )}
          </tbody>
        </STable>
      </STableWrapper>
    </Layout>
  );
};

export default CoinsList;
