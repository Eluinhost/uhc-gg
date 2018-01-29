import { find, propEq, map } from 'ramda';
import { TeamStyles } from '../TeamStyle';
import moment from 'moment-timezone';

const convertMatch = match => ({
  ...match,
  opens: moment(match.opens).utc(),
  created: moment(match.created).utc(),
  teamStyle: find(propEq('value', match.teams), TeamStyles),
});

export const getUpcomingMatches = async () => {
  const response = await fetch('https://hosts.uhc.gg/api/matches/upcoming');

  if (response.status !== 200) {
    throw new Error('unexpected api result');
  }

  const json = await response.json();

  // convert team styles
  const matches = map(convertMatch, json);

  return matches;
};
