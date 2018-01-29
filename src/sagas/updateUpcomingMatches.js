import { takeLatest, put, call } from 'redux-saga/effects';
import { UPDATE_UPCOMING_MATCHES } from '../actions';
import { getUpcomingMatches } from '../api';

export function* updateUpcomingMatches() {
  yield UPDATE_UPCOMING_MATCHES.STARTED();

  try {
    const matches = yield call(getUpcomingMatches);

    yield put(UPDATE_UPCOMING_MATCHES.COMPLETED(matches));
  } catch (err) {
    yield put(UPDATE_UPCOMING_MATCHES.COMPLETED(err));
  }
}

export function* updateUpcomingMatchesListener() {
  yield takeLatest(UPDATE_UPCOMING_MATCHES, updateUpcomingMatches);
}
