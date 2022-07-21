import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllRockets } from '../../apis/rocketsApi';
import { rocketEffectAfterFetch } from '../effects/rocketEffects';

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  getAllRockets,
);

const rocketSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    rocketCancelled: (state, { payload }) => ({
      ...state,
      rockets: state.rockets.map((rocket) => {
        if (rocket.id !== payload) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      }),
    }),
    rocketReserved: (state, action) => ({
      ...state,
      rockets: state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      }),
    }),
  },
  extraReducers: {
    [fetchRockets.pending]: (state) => ({ ...state, status: 'loading' }),
    [fetchRockets.fulfilled]: (state, { payload }) => ({
      ...state,
      status: 'complete',
      rockets: rocketEffectAfterFetch(payload),
    }),
    [fetchRockets.rejected]: (state, { error }) => ({
      ...state,
      error: error.message,
      status: 'failed',
    }),
  },
});

export const {
  rocketReserved,
  rocketCancelled,
} = rocketSlice.actions;

export default rocketSlice.reducer;
