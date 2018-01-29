import { rootSaga } from '../rootSaga';
import { all, fork } from 'redux-saga/effects';
import { updateUpcomingMatches } from '../updateUpcomingMatches';

describe('rootSaga', () => {
  it('should fork each saga', () => {
    const generator = rootSaga();

    const firstYield = generator.next();

    expect(firstYield).toEqual({
      value: all([fork(updateUpcomingMatches)]),
      done: false,
    });

    expect(generator.next()).toEqual({
      value: undefined,
      done: true,
    });
  });
});
