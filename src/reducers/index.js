import { combineReducers } from 'redux';
import { router } from './router';
import { drawer } from './drawer';
import { upcomingMatches } from './upcomingMatches';
import { time } from './time';

export const reducers = combineReducers({
  router,
  drawer,
  upcomingMatches,
  time,
});
