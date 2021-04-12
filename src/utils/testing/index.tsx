import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';

import { rootReducer } from 'store';
import { lightTheme } from 'constants/theme';

export const renderWithRedux = (
  ui: React.ReactElement,
  {
    // @ts-ignore
    initialState = {},
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
    ...renderOptions
  } = {},
) => {
  const Wrapper: React.FC = ({ children }: { children?: React.ReactNode }) => (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </Provider>
  );
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export const mockMarkets = ({
  loading = false,
  error = '',
}: { loading?: boolean; error?: string } = {}) => ({
  list: [
    {
      id: 'bitcoin',
      symbol: 'btc',
      name: 'Bitcoin',
      image:
        'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      current_price: 59809,
      total_volume: 48744020675,
      high_24h: 60574,
      low_24h: 58625,
      price_change_24h: -212.68351116,
      price_change_percentage_24h: -0.35434,
    },
    {
      id: 'ethereum',
      symbol: 'eth',
      name: 'Ethereum',
      image:
        'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
      current_price: 2145.99,
      high_24h: 2156.41,
      low_24h: 2095.25,
      price_change_24h: -2.14896485,
      price_change_percentage_24h: -0.10004,
    },
  ],
  loading,
  error,
  lastUpdated: 'Sun Apr 11 2021 20:58:38 ',
});

export const mockCoinDetails = ({
  loading = false,
  error = '',
  description = '',
  twitter = '',
  telegram = '',
}: {
  loading?: boolean;
  error?: string;
  description?: string;
  telegram?: string;
  twitter?: string;
} = {}) => ({
  details: {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    description: {
      en:
        description ||
        'Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href="https://www.coingecko.com/en?hashing_algorithm=SHA-256">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href="https://www.coingecko.com/en/coins/litecoin">Litecoin</a>, <a href="https://www.coingecko.com/en/coins/peercoin">Peercoin</a>, <a href="https://www.coingecko.com/en/coins/primecoin">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href="https://www.coingecko.com/en/coins/ethereum">Ethereum</a> which led to the development of other amazing projects such as <a href="https://www.coingecko.com/en/coins/eos">EOS</a>.',
    },
    links: {
      homepage: ['https://www.bitcoin.org', '', ''],
      official_forum_url: ['https://bitcointalk.org/', '', ''],
      twitter_screen_name: twitter,
      facebook_username: 'bitcoins',
      subreddit_url: '',
      telegram_channel_identifier: telegram,
      repos_url: { github: [] },
    },
    sentiment_votes_up_percentage: 78.93,
    sentiment_votes_down_percentage: 21.07,
    market_data: {
      current_price: {
        usd: 100000,
      },
      price_change_percentage_24h: 0.4,
    },
    image: { thumb: '', small: '', large: '' },
    community_data: { facebook_likes: 100 },
    developer_data: { forks: 1200 },
  },
  graphData: [
    [1, 3],
    [2, 3],
    [3, 4],
  ],
  graphLoading: loading,
  detailsLoading: loading,
  graphDuration: 'max',
  error,
});

export const mockFetchMarketsSuccess = () =>
  jest
    .spyOn(axios, 'get')
    .mockResolvedValue({ status: 200, data: mockMarkets().list });

export const mockFetchMarketsError = () =>
  jest.spyOn(axios, 'get').mockResolvedValue({ status: 404, data: [] });

export const mockFetchCoinDetailsSuccess = () =>
  jest
    .spyOn(axios, 'get')
    .mockResolvedValue({ status: 200, data: mockCoinDetails().details });

export const mockFetchCoinDetailsError = () =>
  jest.spyOn(axios, 'get').mockResolvedValue({ status: 404, data: [] });
