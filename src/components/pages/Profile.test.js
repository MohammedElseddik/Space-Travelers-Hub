import { screen, waitFor, act } from '@testing-library/react';
import render, { store } from '../../utils/redux-test-utils';
import Profile from './Profile';
import fetchMissions from '../../apis/missionsApi';
import { missionJoined } from '../../redux/features/missionSlice';
import { fetchRockets, rocketReserved } from '../../redux/features/rocketSlice';

it('renders successfully', () => {
  render(<Profile />);
  waitFor(() => {
    expect(screen.getByText('My Missions')).toBeInTheDocument();
    expect(screen.getByText('My Rockets')).toBeInTheDocument();
  });
});

it('displays reservations', () => {
  render(<Profile />);
  const actions = {
    missions: {
      type: fetchMissions.fulfilled.type,
      payload: [
        {
          mission_id: 'm01',
          mission_name: 'MISSION_NAME',
          description: 'MISS_DESCRIPTION',
        },
      ],
    },
    rockets: {
      type: fetchRockets.fulfilled.type,
      payload: [
        {
          id: 1122,
          rocket_name: 'ROCKET_NAME',
          flickr_images: [''],
          description: 'ROCK_DESCRIPTION',
        },
      ],
    },
  };

  act(() => {
    store.dispatch(actions.missions);
    store.dispatch(actions.rockets);
  });
  waitFor(() => {
    const { missions, rockets } = store.getState();
    expect(missions).toHaveLength(1);
    expect(rockets).toHaveLength(1);
  });
  act(() => {
    store.dispatch(missionJoined('m01'));
    store.dispatch(rocketReserved(1122));
  });
  waitFor(() => {
    expect(screen.getByText('ROCKET_NAME')).toBeInTheDocument();
    expect(screen.getByText('MISSION_NAME')).toBeInTheDocument();
  });
});
