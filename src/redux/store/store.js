import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionReducer from '../features/missionSlice';

const store = configureStore({
  reducer: combineReducers({
    missions: missionReducer,
  }),
});

export default store;
