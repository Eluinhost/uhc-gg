import { drawer } from '../drawer';
import { SET_DRAWER_OPEN } from '../../actions';

describe('drawer reducer', () => {
  it('should set isOpen', () => {
    const pre = {
      isOpen: false,
    };

    const post = drawer(pre, SET_DRAWER_OPEN(true));

    expect(post).toEqual({
      isOpen: true,
    });
    expect(post).toMatchSnapshot();
  });
});
