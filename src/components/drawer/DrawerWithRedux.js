import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { SET_DRAWER_OPEN } from '../../actions';
import { Drawer } from './Drawer';

export const mapStateToProps = createSelector(
  state => state.drawer.isOpen,
  isOpen => ({ isOpen })
);

export const mapDispatchToProps = dispatch => ({
  updateIsOpen: isOpen => dispatch(SET_DRAWER_OPEN(isOpen)),
});

export const DrawerWithRedux = connect(mapStateToProps, mapDispatchToProps)(
  Drawer
);
