import { createSlice } from '@reduxjs/toolkit';
import fetchMissionData from '../../apis/missionsApi';
import missionEffectAfterFetch from '../effects/missionEffects';

const initialState = {
  missions: [],
  isLoading: false,
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    missionJoined: (state, { payload }) => ({
      ...state,
      missions: state.missions.map((mission) => {
        if (mission.mission_id !== payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      }),
    }),

    missionLeaved: (state, { payload }) => ({
      ...state,
      missions: state.missions.map((mission) => {
        if (mission.mission_id !== payload) {
          return mission;
        }
        return { ...mission, reserved: false };
      }),
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
