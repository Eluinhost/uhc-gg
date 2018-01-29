import { reducers } from '..';

describe('reducers', () => {
  // doesn't do much, mainly just here for the coverage help
  // so each reducer is picked up
  it('should expose a reducers prop', () => {
    expect(reducers).toBeTruthy();
  });
});
