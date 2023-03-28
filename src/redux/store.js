import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

let store = configureStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
