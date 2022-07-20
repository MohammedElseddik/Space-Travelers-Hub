import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rocketReducer from '../features/rocketSlice';
import missionReducer from '../features/missionSlice';

const reducer = combineReducers({
  rockets: rocketReducer,
  missions: missionReducer,
});

export default configureStore({ reducer });
