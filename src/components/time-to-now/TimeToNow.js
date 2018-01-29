import * as React from 'react';
import moment from 'moment-timezone';
import { AppText } from '../app-text';
import PropTypes from 'prop-types';

export class TimeToNow extends React.PureComponent {
  static propTypes = {
    time: PropTypes.instanceOf(moment).isRequired,
  };

  state = {
    currentTime: moment.utc(),
  };

  timerId = null;

  update = () => this.setState({ currentTime: moment.utc() });

  componentDidMount() {
    this.timerId = window.setInterval(this.update, 2000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <AppText style={this.props.style}>
        {this.props.time.from(this.state.currentTime, false)}
      </AppText>
    );
  }
}
