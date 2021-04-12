export interface GlobalState {
  global: State;
}

export type Currency = { name: string; symbol: string };

export interface State {
  theme: string;
  currency: Currency;
}
