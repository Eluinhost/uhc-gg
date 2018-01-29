import { AppText } from '../app-text';
import * as React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';

export class FormattedTime extends React.PureComponent {
  static propTypes = {
    timezone: PropTypes.string.isRequired,
    format: PropTypes.string.isRequired,
    time: PropTypes.instanceOf(moment).isRequired,
  };

  render() {
    const time = this.props.time
      .clone()
      .tz(this.props.timezone)
      .format(this.props.format);

    return <AppText style={this.props.style}>{time}</AppText>;
  }
}
