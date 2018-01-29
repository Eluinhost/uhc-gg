import { call, put, takeLatest } from 'redux-saga/effects';
import {
  updateUpcomingMatches,
  updateUpcomingMatchesListener,
} from '../updateUpcomingMatches';
import { UPDATE_UPCOMING_MATCHES } from '../../actions';
import { getUpcomingMatches } from '../../api';

describe('updateUpcomingMatches saga', () => {
  describe('updateUpcomingMatchesListener', () => {
    it('should listen to UPDATE_UPCOMING_MATCHES actions', () => {
      const generator = updateUpcomingMatchesListener();

      expect(generator.next()).toEqual({
        value: takeLatest(UPDATE_UPCOMING_MATCHES, updateUpcomingMatches),
        done: false,
      });

      expect(generator.next()).toEqual({
        value: undefined,
        done: true,
      });
    });
  });

  describe('updateUpcomingMatches', () => {
    it('should work for successful API calls', () => {
      const generator = updateUpcomingMatches(UPDATE_UPCOMING_MATCHES());

      expect(generator.next()).toEqual({
        value: put(UPDATE_UPCOMING_MATCHES.STARTED()),
        done: false,
      });

      expect(generator.next()).toEqual({
        value: call(getUpcomingMatches),
        done: false,
      });

      const result = 'result';

      expect(generator.next(result)).toEqual({
        value: put(UPDATE_UPCOMING_MATCHES.COMPLETED(result)),
        done: false,
      });

      expect(generator.next()).toEqual({
        value: undefined,
        done: true,
      });
    });

    it('should work for unsuccessful API calls', () => {
      const generator = updateUpcomingMatches(UPDATE_UPCOMING_MATCHES());

      expect(generator.next()).toEqual({
        value: put(UPDATE_UPCOMING_MATCHES.STARTED()),
        done: false,
      });

      expect(generator.next()).toEqual({
        value: call(getUpcomingMatches),
        done: false,
      });

      const error = new Error('error');

      expect(generator.throw(error)).toEqual({
        value: put(UPDATE_UPCOMING_MATCHES.COMPLETED(error)),
        done: false,
      });

      expect(generator.next()).toEqual({
        value: undefined,
        done: true,
      });
    });
  });
});
