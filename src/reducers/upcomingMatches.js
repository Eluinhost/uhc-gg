import { UPDATE_UPCOMING_MATCHES } from '../actions';
import { handleActions } from 'redux-actions';

export const upcomingMatches = handleActions(
  {
    [UPDATE_UPCOMING_MATCHES.STARTED]: state => ({
      isFetching: true,
      error: null,
      matches: state.matches,
    }),
    [UPDATE_UPCOMING_MATCHES.COMPLETED]: {
      next: (state, action) => ({
        isFetching: false,
        error: null,
        matches: action.payload.matches,
      }),
      throw: (state, action) => ({
        isFetching: false,
        error: action.payload,
        matches: state.matches,
      }),
    },
  },
  {
    isFetching: false,
    error: null,
    matches: [],
  }
);
