import axios from "axios";
import { fetchMissionData } from "../../apis/missionsApi";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  missionData: [],
};

const missionSlice = createSlice({
  name: "mission",
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
