import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllRockets } from "../../apis/rocketsApi";
import { rocketEffectAfterFetch } from "../effects/rocketEffects";

const initialState = {
  rockets: [],
  status: "idle",
  error: null,
};

export const fetchRockets = createAsyncThunk(
  "rockets/fetchRockets",
  getAllRockets
);

const rocketSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    rocketReserved: (state, action) => ({
      ...state,
      rockets: state.rockets.map((rocket) => {
        console.log(action.payload);
        if (rocket.id !== action.payload) {
          console.log("did not passed");
          return rocket;
        }
        console.log("passed");
        return { ...rocket, reserved: true };
      }),
    }),
  },

  extraReducers: {
    [fetchRockets.pending]: (state) => ({ ...state, status: "loading" }),
    [fetchRockets.fulfilled]: (state, { payload }) => ({
      ...state,
      status: "complete",
      rockets: rocketEffectAfterFetch(payload),
    }),
    [fetchRockets.rejected]: (state, { error }) => ({
      ...state,
      error: error.message,
      status: "failed",
    }),
  },
});

export const { rocketReserved } = rocketSlice.actions;

export default rocketSlice.reducer;
