import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  State,
  unknown,
  AnyAction
>;

export type Markets = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
  price_change_percentage_24h: number;
};

export interface MarketsState {
  markets: State;
}

export interface State {
  list: Array<Markets>;
  loading: boolean;
  error: string;
  lastUpdated: string | null;
}
