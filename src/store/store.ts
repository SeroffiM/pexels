import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { RootReducer } from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import photosSaga from './saga/photosSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(photosSaga)
