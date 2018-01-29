import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducers';
import createSagaMiddleware from 'redux-saga';
import { sagas } from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as actions from './actions';
import { routerMiddleware } from 'react-router-redux';
import { history } from './history';

const enhanceWithDevTools = composeWithDevTools({
  actionCreators: actions,
});

export const createReduxStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducers,
    enhanceWithDevTools(
      applyMiddleware(sagaMiddleware, routerMiddleware(history))
    )
  );

  sagaMiddleware.run(sagas);

  return store;
};
