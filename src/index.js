import { App } from './components/app';
import Expo from 'expo';
import * as React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from './createReduxStore';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './history';

const store = createReduxStore();

class AppWithRedux extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );
  }
}

// Entry point for application, here we register the Application root component to be rendered by Expo
Expo.registerRootComponent(AppWithRedux);
