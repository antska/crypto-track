import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from 'components/Layout';
import { fetchMarketsList } from 'store/markets/actions';
import {
  getCoinMarketsList,
  getIsLoadingMarkets,
} from 'store/markets/selectors';
import { useParams } from 'react-router';
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
import { FETCH_INTERVAL_MS } from '../../constants';
import PercentageField from './components/PercentageField';
import TableHeader from './components/TableHeader';

const headerNames = ['Name', 'Price (USD)', '24h High', '24h Low', '24h %'];

// const formatPrice = (str: string) => Number.parseFloat(str).toLocaleString();

const CoinsList = () => {
  const dispatch = useDispatch();
  const coins = useSelector(getCoinMarketsList());
  const isLoading = useSelector(getIsLoadingMarkets());
  const { page } = useParams<{ page: string }>();

  const currentPage = page ? Number.parseInt(page, 10) : 1;

  const fetchData = useCallback((pageNum: number) => {
    dispatch(fetchMarketsList({ page: pageNum }));
  }, []);

  useEffect(() => {
    fetchData(currentPage);
    const interval = setInterval(
      () => fetchData(currentPage),
      FETCH_INTERVAL_MS,
    );

    return () => {
      clearInterval(interval);
    };
  }, [currentPage]);

  return (
    <Layout>
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
            {coins.length &&
              coins.map((item, index) => (
                <tr key={`row-${item.name}`}>
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
                    ${item.current_price.toLocaleString()}
                  </SPriceField>
                  <td>${item.high_24h.toLocaleString()}</td>
                  <td>${item.low_24h.toLocaleString()}</td>
                  <td>
                    <PercentageField perc={item.price_change_percentage_24h} />
                  </td>
                </tr>
              ))}
            {!coins.length && !isLoading && <span>No coins found</span>}
          </tbody>
        </STable>
      </STableWrapper>
    </Layout>
  );
};

export default CoinsList;
