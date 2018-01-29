import { handleActions } from 'redux-actions';
import moment from 'moment-timezone';

export const time = handleActions({}, { timezone: moment.tz.guess() });
