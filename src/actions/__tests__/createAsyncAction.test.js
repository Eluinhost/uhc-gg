import { createAsyncAction } from '../createAsyncAction';

describe('createAsyncAction', () => {
  describe('trigger action', () => {
    it('should use the passed name', () => {
      const actionCreator = createAsyncAction('TEST_ACTION');

      expect(actionCreator.toString()).toBe('TEST_ACTION');
    });

    it('should send empty payloads by default', () => {
      const actionCreator = createAsyncAction('TEST_ACTION');

      expect(actionCreator('TEST ARG')).toEqual({
        type: 'TEST_ACTION',
        payload: {},
        meta: {},
      });
    });

    it('should use payload and meta functions', () => {
      const actionCreator = createAsyncAction('TEST_ACTION', {
        triggered: input => input * 2,
        triggeredMeta: input => input * 3,
      });

      expect(actionCreator(10)).toEqual({
        type: 'TEST_ACTION',
        payload: 20,
        meta: 30,
      });
    });
  });

  describe('started action', () => {
    it('should use the passed name + .STARTED', () => {
      const actionCreator = createAsyncAction('TEST_ACTION');

      expect(actionCreator.STARTED.toString()).toBe('TEST_ACTION.STARTED');
    });

    it('should send empty payloads by default', () => {
      const actionCreator = createAsyncAction('TEST_ACTION');

      expect(actionCreator.STARTED('TEST ARG')).toEqual({
        type: 'TEST_ACTION.STARTED',
        payload: {},
        meta: {},
      });
    });

    it('should use payload and meta functions', () => {
      const actionCreator = createAsyncAction('TEST_ACTION', {
        started: input => input * 2,
        startedMeta: input => input * 3,
      });

      expect(actionCreator.STARTED(10)).toEqual({
        type: 'TEST_ACTION.STARTED',
        payload: 20,
        meta: 30,
      });
    });
  });

  describe('completed action', () => {
    it('should use the passed name + .COMPLETED', () => {
      const actionCreator = createAsyncAction('TEST_ACTION');

      expect(actionCreator.COMPLETED.toString()).toBe('TEST_ACTION.COMPLETED');
    });

    it('should send empty payloads by default', () => {
      const actionCreator = createAsyncAction('TEST_ACTION');

      expect(actionCreator.COMPLETED('TEST ARG')).toEqual({
        type: 'TEST_ACTION.COMPLETED',
        payload: {},
        meta: {},
      });
    });

    it('should use payload and meta functions', () => {
      const actionCreator = createAsyncAction('TEST_ACTION', {
        completed: input => input * 2,
        completedMeta: input => input * 3,
      });

      expect(actionCreator.COMPLETED(10)).toEqual({
        type: 'TEST_ACTION.COMPLETED',
        payload: 20,
        meta: 30,
      });
    });

    it('should use handle errors inputs correctly', () => {
      const actionCreator = createAsyncAction('TEST_ACTION', {
        completed: input => input * 2,
        completedMeta: input => input instanceof Error,
      });

      expect(actionCreator.COMPLETED(new Error('test error'))).toEqual({
        type: 'TEST_ACTION.COMPLETED',
        payload: new Error('test error'),
        error: true,
        meta: true,
      });
    });
  });
});
