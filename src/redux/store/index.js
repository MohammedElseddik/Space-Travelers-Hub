import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rocketReducer from '../features/rocketSlice';

const reducer = combineReducers({
  rockets: rocketReducer,
});

export default configureStore({ reducer });
