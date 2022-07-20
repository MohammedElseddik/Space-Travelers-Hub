import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

const fetchMissionData = createAsyncThunk(
  'mission/fetchMissionData',
  async () => {
    try {
      const response = await axios(url);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export default fetchMissionData;
