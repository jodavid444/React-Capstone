import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import categoriesReducer from './categories/Categories';
import foodReducer from './details/Details';

const reducers = combineReducers({
  categoriesReducer,
  foodReducer,
});

const store = configureStore(
  { reducer: reducers },
  applyMiddleware(logger, thunk),
);

export default store;
