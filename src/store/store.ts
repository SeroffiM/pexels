import { createStore } from 'redux';
import { RootReducer } from './reducers/rootReducer';
import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(RootReducer,composeWithDevTools());
