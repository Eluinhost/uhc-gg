import * as React from 'react';
import {
  Image,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Link } from 'react-router-native';
import logo from '../../../assets/logo.png';
import { List, ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';
import { LIGHT_BACKGROUND, LIGHT_HIGHLIGHT } from '../../Colours';
import { AppText } from '../app-text';

export class DrawerMenu extends React.PureComponent {
  static propTypes = {
    closeMenu: PropTypes.func.isRequired,
  };

  static styles = StyleSheet.create({
    menu: {
      paddingTop: 15,
      shadowColor: '#000000',
      shadowOpacity: 0.8,
      shadowRadius: 3,
      backgroundColor: LIGHT_BACKGROUND,
    },
    logoWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      margin: 10,
    },
    title: {
      fontSize: 40,
      color: LIGHT_HIGHLIGHT,
    },
    linksList: {
      marginTop: 0,
    },
    linkTitleStyle: {
      fontFamily: 'ShareTech-Regular',
    },
    linkContainerStyle: {
      borderTopColor: LIGHT_HIGHLIGHT,
      borderTopWidth: 2,
    },
  });

  render() {
    return (
      <ScrollView scrollsToTop={false} style={DrawerMenu.styles.menu}>
        <Link
          to="/"
          onPress={this.props.closeMenu}
          component={TouchableOpacity}
        >
          <View style={DrawerMenu.styles.logoWrapper}>
            <Image source={logo} style={DrawerMenu.styles.logo} />
            <AppText style={DrawerMenu.styles.title}>uhc.gg</AppText>
          </View>
        </Link>

        <List containerStyle={DrawerMenu.styles.linksList}>
          <Link
            to="/"
            title="Upcoming Matches"
            titleStyle={DrawerMenu.styles.linkTitleStyle}
            component={ListItem}
            containerStyle={DrawerMenu.styles.linkContainerStyle}
            chevronColor={LIGHT_HIGHLIGHT}
            onPress={this.props.closeMenu}
          />
        </List>
      </ScrollView>
    );
  }
}
