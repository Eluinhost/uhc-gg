import { SET_DRAWER_OPEN } from '../../actions';
import { connect } from 'react-redux';
import { Header } from './Header';

export const mapDispatchToProps = dispatch => ({
  openDrawer: () => dispatch(SET_DRAWER_OPEN(true)),
});

export const HeaderWithRedux = connect(undefined, mapDispatchToProps)(Header);
