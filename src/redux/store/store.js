import { configureStore } from '@reduxjs/toolkit';
import missionReducer from '../features/missionSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
  },
});

export default store;
