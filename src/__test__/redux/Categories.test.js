import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer, { fetchCategories } from '../../redux/categories/Categories';

const initialState = [];

const reducer = combineReducers({
  categoriesReducer,
});

const store = configureStore(
  { reducer },
  applyMiddleware(thunk),
);

describe('categoriesReducer', () => {
  it('should return initial state', () => {
    expect(store.getState().categoriesReducer).toEqual(initialState);
  });

  it('should return playerArray', () => {
    const playerArray = [{
      id: 1,
      name: 'Beef',
    }];

    store.dispatch(fetchCategories(playerArray));
    expect(store.getState().categoriesReducer).toEqual(playerArray);
  });
});
