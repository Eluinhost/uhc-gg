import { createSelector } from 'reselect';
import { UPDATE_UPCOMING_MATCHES } from '../../actions';
import { UpcomingMatches } from './UpcomingMatches';
import { connect } from 'react-redux';

const mapStateToProps = createSelector(
  state => state.upcomingMatches,
  upcomingMatches => upcomingMatches
);

const mapDispatchToProps = dispatch => ({
  update: () => dispatch(UPDATE_UPCOMING_MATCHES()),
});

export const UpcomingMatchesWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(UpcomingMatches);
