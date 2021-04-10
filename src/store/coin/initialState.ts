import { State } from './types';

const initialState: State = {
  details: null,
  graphData: [],
  graphLoading: false,
  detailsLoading: false,
  error: false,
  graphDuration: 'max',
};

export default initialState;
