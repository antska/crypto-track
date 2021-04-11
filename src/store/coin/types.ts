import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  State,
  unknown,
  AnyAction
>;

type Links = {
  homepage: string[];
  official_forum_url: string[];
  subreddit_url: string;
  telegram_channel_identifier: string;
  twitter_screen_name: string;
  facebook_username: string;
  repos_url: { github: string[] };
};

export type Currency = { [currency: string]: number };

export type ATHLDate = { [currency: string]: string };

type PriceChange = {
  [key: string]: number | Currency | ATHLDate;
};

export type Details = {
  name: string;
  symbol: string;
  description: { en: string };
  links: Links;
  image: { thumb: string; small: string; large: string };
  market_data: PriceChange;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  community_data: { [key: string]: number };
  developer_data: { [key: string]: number };
};

export interface CoinState {
  coin: State;
}

export interface State {
  details: Details | null;
  graphData: number[][];
  graphLoading: boolean;
  detailsLoading: boolean;
  error: string;
  graphDuration: string | number;
}
