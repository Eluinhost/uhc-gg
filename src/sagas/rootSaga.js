import { all, fork } from 'redux-saga/effects';
import { map } from 'ramda';
import { updateUpcomingMatches } from './updateUpcomingMatches';

const sagas = [updateUpcomingMatches];

export function* rootSaga() {
  yield all(map(fork, sagas));
}
