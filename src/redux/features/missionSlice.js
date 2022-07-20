import { createSlice } from '@reduxjs/toolkit';
import fetchMissionData from '../../apis/missionsApi';

const initialState = {
  missionData: [],
  isLoading: false,
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMissionData.pending]: (state) => {
      state.isLoading = true;
    },

    [fetchMissionData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.missionData = action.payload;
    },

    [fetchMissionData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default missionSlice.reducer;
