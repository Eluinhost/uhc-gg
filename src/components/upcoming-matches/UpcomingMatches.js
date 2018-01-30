import * as React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, StyleSheet } from 'react-native';
import { MatchPreview } from '../match-preview';

class Row extends React.PureComponent {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  static styles = StyleSheet.create({
    wrapper: { paddingTop: 10, paddingBottom: 10 },
  });

  render() {
    return (
      <View style={Row.styles.wrapper}>
        <MatchPreview match={this.props.item} />
      </View>
    );
  }
}

export class UpcomingMatches extends React.PureComponent {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.object,
    matches: PropTypes.array.isRequired,
    update: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.update();
  }

  _keyExtractor = item => item.id;

  _renderRow = props => <Row {...props} />;

  render() {
    // TODO handle error

    return (
      <FlatList
        data={this.props.matches}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderRow}
        onRefresh={this.props.update}
        refreshing={this.props.isFetching}
      />
    );
  }
}
