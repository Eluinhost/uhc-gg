import * as React from 'react';
import moment from 'moment-timezone';
import { AppText } from '../app-text';
import PropTypes from 'prop-types';
import {
  compose,
  dropLastWhile,
  evolve,
  identity,
  ifElse,
  map,
  propEq,
  reverse,
  takeLast,
} from 'ramda';
import { View, StyleSheet } from 'react-native';

export class TimeToNow extends React.PureComponent {
  static propTypes = {
    time: PropTypes.instanceOf(moment).isRequired,
  };

  static styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around',
    },
  });

  state = {
    parts: [],
    past: false,
  };

  timerId = null;

  _update = () => {
    const diff = moment.duration(this.props.time.diff(this.state.currentTime));

    const parts = compose(
      map(
        ifElse(
          propEq('value', 1),
          identity,
          evolve({
            label: label => `${label}s`,
          })
        )
      ),
      reverse,
      takeLast(2),
      dropLastWhile(propEq('value', 0))
    )([
      { label: 'sec', value: diff.seconds() },
      { label: 'min', value: diff.minutes() },
      { label: 'hour', value: diff.hours() },
      { label: 'day', value: diff.days() },
      { label: 'month', value: diff.months() },
      { label: 'year', value: diff.years() },
    ]);

    this.setState({ parts, past: parts[0].value < 0 });
  };

  componentDidMount() {
    this.timerId = window.setInterval(this._update, 1000);
    this._update();
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <View style={TimeToNow.styles.container}>
        <AppText style={this.props.style}>
          {this.state.past ? '-' : null}
        </AppText>
        {this.state.parts.map((part, index) => (
          <View key={index}>
            <AppText style={this.props.style}>{Math.abs(part.value)}</AppText>
            <AppText style={this.props.style}>{part.label}</AppText>
          </View>
        ))}
      </View>
    );
  }
}
