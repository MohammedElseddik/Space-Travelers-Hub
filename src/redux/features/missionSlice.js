import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missionData: [],
};

export const fetchMissionData = createAsyncThunk(
  'mission/fetchMissionData',
  async () => {
    try {
      const response = await axios(url);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

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
