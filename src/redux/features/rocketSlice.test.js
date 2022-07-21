import reducer, {
  rocketReserved, rocketCanceled, fetchRockets,
} from './rocketSlice';

describe('Test rocketSlice', () => {
  it('rocketReserved', () => {
    const initialState = {
      rockets: [{ id: 1 }],
    };
    expect(
      reducer(initialState, rocketReserved(1)),
    ).toEqual({
      rockets: [{ id: 1, reserved: true }],
    });
  });

  it('rocketCanceled', () => {
    const initialState = {
      rockets: [{ id: 1, reserved: true }],
    };
    expect(
      reducer(initialState, rocketCanceled(1)),
    ).toEqual({
      rockets: [{ id: 1, reserved: false }],
    });
  });

  it('fetchRockets.pending', () => {
    const initialState = {
      rockets: [],
      status: 'idle',
    };
    const action = { type: fetchRockets.pending.type };
    expect(
      reducer(initialState, action),
    ).toEqual({ rockets: [], status: 'loading' });
  });

  it('fetchRockets.fulfilled', () => {
    const initialState = {
      rockets: [],
      status: 'loading',
    };
    const action = {
      type: fetchRockets.fulfilled.type,
      payload: [{
        id: 1,
        rocket_name: 'space',
        flickr_images: [''],
        description: 'Science rocket',
      }],
    };
    expect(
      reducer(initialState, action),
    ).toEqual({
      rockets: [{
        id: 1, name: 'space', imageUrl: '', details: 'Science rocket',
      }],
      status: 'complete',
    });
  });

  it('fetchRockets.rejected', () => {
    const initialState = {
      rockets: [],
      status: 'loading',
    };
    const action = {
      type: fetchRockets.rejected.type,
      error: 'FAILED',
    };
    expect(
      reducer(initialState, action),
    ).toEqual({ rockets: [], status: 'failed', error: 'FAILED' });
  });
});
