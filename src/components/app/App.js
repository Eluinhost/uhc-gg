import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Switch, Route } from 'react-router-native';
import { Drawer } from '../drawer';
import { AppLoading, Font } from 'expo';
import { UpcomingMatches } from '../upcoming-matches';
import { Header } from '../header';
import font from '../../../assets/ShareTech-Regular.ttf';

export class App extends React.Component {
  static styles = StyleSheet.create({
    page: { flex: 1 },
  });

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'ShareTech-Regular': font,
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }

    return (
      <Drawer>
        <Header />
        <View style={App.styles.page}>
          <Switch>
            <Route exact path="/" component={UpcomingMatchesScreen} />
          </Switch>
        </View>
      </Drawer>
    );
  }
}

const UpcomingMatchesScreen = () => (
  <View style={App.styles.page}>
    <UpcomingMatches />
  </View>
);
