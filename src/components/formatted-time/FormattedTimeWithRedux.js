import { FormattedTime } from './FormattedTime';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

export const mapStateToProps = createSelector(
  state => state.time.timezone,
  timezone => ({
    timezone,
  })
);

export const FormattedTimeWithRedux = connect(mapStateToProps)(FormattedTime);
