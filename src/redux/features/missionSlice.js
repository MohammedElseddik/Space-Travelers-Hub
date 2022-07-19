import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const url = "https://api.spacexdata.com/v3/missions";

const initialState = {
  missionData: [],
};

const missionSlice = createSlice({
  name: "mission",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default missionSlice.reducer;
