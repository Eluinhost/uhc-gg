import { LIGHT_HIGHLIGHT } from '../../Colours';
import * as React from 'react';
import { Header as HeaderLib, Icon } from 'react-native-elements';
import { AppText } from '../app-text';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

export class Header extends React.PureComponent {
  static propTypes = {
    openDrawer: PropTypes.func.isRequired,
  };

  static styles = StyleSheet.create({
    text: {
      fontSize: 20,
      color: 'white',
      paddingBottom: 10,
    },
    container: {
      borderBottomWidth: 0,
      paddingBottom: 0,
    },
    iconWrapper: {
      padding: 7,
    },
  });

  render() {
    return (
      <HeaderLib
        backgroundColor={LIGHT_HIGHLIGHT}
        outerContainerStyles={Header.styles.container}
      >
        <TouchableHighlight
          onPress={this.props.openDrawer}
          underlayColor="#FFFFFF33"
        >
          <View style={Header.styles.iconWrapper}>
            <Icon name="menu" color="white" size={30} />
          </View>
        </TouchableHighlight>
        <AppText style={Header.styles.text}>Upcoming Matches</AppText>
        <TouchableHighlight underlayColor="#FFFFFF33">
          <View style={Header.styles.iconWrapper}>
            <Icon name="settings" color="white" size={30} />
          </View>
        </TouchableHighlight>
      </HeaderLib>
    );
  }
}
