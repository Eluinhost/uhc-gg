import { createAction } from 'redux-actions';
import { always } from 'ramda';

const emptyPayload = always({});

export const createAsyncAction = (name, options = {}) => {
  const trigger = createAction(
    name,
    options.triggered || emptyPayload,
    options.triggeredMeta || emptyPayload
  );

  trigger.STARTED = createAction(
    `${name}.STARTED`,
    options.started || emptyPayload,
    options.startedMeta || emptyPayload
  );
  trigger.COMPLETED = createAction(
    `${name}.COMPLETED`,
    options.completed || emptyPayload,
    options.completedMeta || emptyPayload
  );

  return trigger;
};
