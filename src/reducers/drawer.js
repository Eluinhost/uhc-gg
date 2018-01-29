import { SET_DRAWER_OPEN } from '../actions';
import { handleActions } from 'redux-actions';

export const drawer = handleActions(
  {
    [SET_DRAWER_OPEN]: (state, action) => ({
      isOpen: action.payload.isOpen,
    }),
  },
  { isOpen: false }
);
