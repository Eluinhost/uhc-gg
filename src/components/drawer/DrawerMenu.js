import * as React from 'react';
import {
  Image,
  ScrollView,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { Link } from 'react-router-native';
import logo from '../../../assets/logo.png';
import { List, ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';
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
      backgroundColor: '#263238',
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
    },
    linksList: {
      marginTop: 0,
    },
    linkTitleStyle: {
      fontFamily: 'ShareTech-Regular',
      color: '#ECEFF1',
    },
    linkContainerStyle: {
      backgroundColor: '#37474F',
    },
  });

  render() {
    return (
      <ScrollView scrollsToTop={false} style={DrawerMenu.styles.menu}>
        <Link
          to="/"
          onPress={this.props.closeMenu}
          component={TouchableHighlight}
          underlayColor="#37474F33"
        >
          <View style={DrawerMenu.styles.logoWrapper}>
            <Image source={logo} style={DrawerMenu.styles.logo} />
            <AppText style={DrawerMenu.styles.title}>uhc.gg</AppText>
          </View>
        </Link>

        <List containerStyle={DrawerMenu.styles.linksList}>
          <Link
            to="/"
            component={TouchableHighlight}
            onPress={this.props.closeMenu}
            underlayColor="#37474F33"
          >
            <View>
              <ListItem
                title="Upcoming Matches"
                titleStyle={DrawerMenu.styles.linkTitleStyle}
                containerStyle={DrawerMenu.styles.linkContainerStyle}
                chevronColor="#ECEFF1"
              />
            </View>
          </Link>
        </List>
      </ScrollView>
    );
  }
}
