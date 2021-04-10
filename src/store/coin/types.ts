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
  twitter_screen_name: string;
  facebook_username: string;
  repos_url: { github: string[] };
};

export type Details = {
  name: string;
  symbol: string;
  description: { en: string };
  links: Links;
  image: { thumb: string; small: string; large: string };
  market_data: {
    current_price: { [currency: string]: number };
    price_change_percentage_24h: number;
  };
};

export interface CoinState {
  coin: State;
}

export interface State {
  details: Details | null;
  graphData: number[][];
  graphLoading: boolean;
  detailsLoading: boolean;
  error: boolean;
  graphDuration: string | number;
}
