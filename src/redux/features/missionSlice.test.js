import reducer, { missionJoined, missionLeaved } from './missionSlice';
import fetchMissions from '../../apis/missionsApi';

describe('Test missionSlice', () => {
  it('missionJoined', () => {
    const initialState = {
      missions: [{ mission_id: 1 }],
    };
    expect(
      reducer(initialState, missionJoined(1)),
    ).toEqual({
      missions: [{ mission_id: 1, reserved: true }],
    });
  });

  it('missionLeft', () => {
    const initialState = {
      missions: [{ mission_id: 1, reserved: true }],
    };
    expect(
      reducer(initialState, missionLeaved(1)),
    ).toEqual({
      missions: [{ mission_id: 1, reserved: false }],
    });
  });

  it('fetchMissions.pending', () => {
    const initialState = {
      missions: [],
      isLoading: false,
    };
    const action = { type: fetchMissions.pending.type };
    expect(
      reducer(initialState, action),
    ).toEqual({ missions: [], isLoading: true });
  });

  it('fetchMissions.fulfilled', () => {
    const initialState = {
      missions: [],
      isLoading: true,
    };
    const mission = {
      mission_id: 1,
      mission_name: 'space',
      description: 'First man on the moon',
    };
    const action = { type: fetchMissions.fulfilled.type, payload: [mission] };
    expect(
      reducer(initialState, action),
    ).toEqual({ missions: [mission], isLoading: null });
  });

  it('fetchMissions.rejected', () => {
    const initialState = {
      missions: [],
      isLoading: false,
    };
    const action = { type: fetchMissions.rejected.type };
    expect(
      reducer(initialState, action),
    ).toEqual({ missions: [], isLoading: null });
  });
});
