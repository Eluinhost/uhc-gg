import { createAction } from 'redux-actions';
import { createAsyncAction } from './createAsyncAction';

export const SET_DRAWER_OPEN = createAction('SET_DRAWER_OPEN', isOpen => ({
  isOpen,
}));

export const UPDATE_UPCOMING_MATCHES = createAsyncAction(
  'UPDATE_UPCOMING_MATCHES',
  {
    completed: matches => ({ matches }),
  }
);
