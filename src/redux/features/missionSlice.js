import { createSlice } from "@reduxjs/toolkit";
import fetchMissionData from "../../apis/missionsApi";
import missionEffectAfterFetch from "../effects/missionEffects";

const initialState = {
  missionData: [],
  isLoading: false,
};

const missionSlice = createSlice({
  name: "mission",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMissionData.pending]: (state) => ({ ...state, isLoading: true }),

    [fetchMissionData.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      missionData: missionEffectAfterFetch(action),
    }),

    [fetchMissionData.rejected]: (state) => ({ ...state, isLoading: false }),
  },
});

export default missionSlice.reducer;
