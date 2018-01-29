import * as React from 'react';
import PropTypes from 'prop-types';
import { DrawerMenu } from './DrawerMenu';
import { View } from 'react-native';
import DrawerLib from 'react-native-drawer';
import { App } from '../app';

export class Drawer extends React.PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    updateIsOpen: PropTypes.func.isRequired,
  };

  static styles = {
    main: {
      paddingLeft: 3,
    },
    mainOverlay: {
      backgroundColor: 'black',
      opacity: 0,
    },
  };

  static tweenHandler = percent => ({
    mainOverlay: { opacity: percent * 0.8 },
  });

  _onCloseStart = () => this.props.updateIsOpen(false);
  _onOpenStart = () => this.props.updateIsOpen(true);

  _renderContent = () => <DrawerMenu closeMenu={this._onCloseStart} />;

  render() {
    return (
      <DrawerLib
        type="overlay"
        content={this._renderContent()}
        open={this.props.isOpen}
        onClose={this._onCloseStart}
        onOpen={this._onOpenStart}
        captureGestures
        tapToClose
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        panOpenMask={0.05}
        closedDrawerOffset={-3}
        styles={Drawer.styles}
        tweenHandler={Drawer.tweenHandler}
      >
        <View style={App.styles.page}>{this.props.children}</View>
      </DrawerLib>
    );
  }
}
