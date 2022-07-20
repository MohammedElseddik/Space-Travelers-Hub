import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://api.spacexdata.com/v3/missions";

export const fetchMissionData = createAsyncThunk(
  "mission/fetchMissionData",
  async () => {
    try {
      const response = await axios(url);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
