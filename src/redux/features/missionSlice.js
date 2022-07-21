import { createSlice } from '@reduxjs/toolkit';
import fetchMissionData from '../../apis/missionsApi';
import {
  missionEffectAfterFetch,
  reservationEffect,
} from '../effects/missionEffects';

const initialState = {
  missions: [],
  isLoading: false,
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    missionJoined: (state, action) => ({
      ...state,
      missions: reservationEffect(state, action),
    }),
    missionLeaved: (state, action) => ({
      ...state,
      missions: reservationEffect(state, action),
    }),
  },
  extraReducers: {
    [fetchMissionData.pending]: (state) => ({ ...state, isLoading: true }),

    [fetchMissionData.fulfilled]: (state, action) => ({
      ...state,
      isLoading: null,
      missions: missionEffectAfterFetch(action),
    }),

    [fetchMissionData.rejected]: (state) => ({ ...state, isLoading: null }),
  },
});

export const { missionJoined, missionLeaved } = missionSlice.actions;

export default missionSlice.reducer;
