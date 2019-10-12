import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createEpicMiddleware } from 'redux-observable'
import createReducer from './reducers';
import { rootEpic } from './epics';

export default function configureStore(initialState = {}, history) {
  let composeEnhancers = compose;

  const epicMiddleware = createEpicMiddleware();
  const middlewares = [epicMiddleware, routerMiddleware(history)];
  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers),
  );

  epicMiddleware.run(rootEpic);

  return store;
}
