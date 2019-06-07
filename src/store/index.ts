import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import cardReducer from 'reducers/card';
import cardSaga from 'sagas/card';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  cardReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(cardSaga);

export default store;
