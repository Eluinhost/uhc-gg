import { UPDATE_UPCOMING_MATCHES } from '../../actions';
import { upcomingMatches } from '../upcomingMatches';

describe('upcomingMatches reducer', () => {
  test('UPDATE_UPCOMING_MATCHES.STARTED', () => {
    const pre = {
      isFetching: false,
      error: new Error('test'),
      matches: [1, 2, 3],
    };

    const post = upcomingMatches(pre, UPDATE_UPCOMING_MATCHES.STARTED());

    expect(post).toEqual({
      isFetching: true,
      error: null,
      matches: [1, 2, 3],
    });
    expect(post).toMatchSnapshot();
  });

  test('UPDATE_UPCOMING_MATCHES.COMPLETED success', () => {
    const pre = {
      isFetching: true,
      error: new Error('test'),
      matches: [1, 2, 3],
    };

    const post = upcomingMatches(
      pre,
      UPDATE_UPCOMING_MATCHES.COMPLETED([3, 4, 5])
    );

    expect(post).toEqual({
      isFetching: false,
      error: null,
      matches: [3, 4, 5],
    });
    expect(post).toMatchSnapshot();
  });

  test('UPDATE_UPCOMING_MATCHES.COMPLETED failure', () => {
    const pre = {
      isFetching: true,
      error: null,
      matches: [1, 2, 3],
    };

    const post = upcomingMatches(
      pre,
      UPDATE_UPCOMING_MATCHES.COMPLETED(new Error('test'))
    );

    expect(post).toEqual({
      isFetching: false,
      error: new Error('test'),
      matches: [1, 2, 3],
    });
    expect(post).toMatchSnapshot();
  });
});
